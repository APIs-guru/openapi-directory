import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSchemasValidateMessagePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubProjectsSchemasValidateMessageQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubProjectsSchemasValidateMessageSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasValidateMessageSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasValidateMessageSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSchemasValidateMessageSecurityOption1;
    option2?: PubsubProjectsSchemasValidateMessageSecurityOption2;
}
export declare class PubsubProjectsSchemasValidateMessageRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSchemasValidateMessagePathParams;
    queryParams: PubsubProjectsSchemasValidateMessageQueryParams;
    request?: shared.ValidateMessageRequestInput;
    security: PubsubProjectsSchemasValidateMessageSecurity;
}
export declare class PubsubProjectsSchemasValidateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validateMessageResponse?: Map<string, any>;
}
