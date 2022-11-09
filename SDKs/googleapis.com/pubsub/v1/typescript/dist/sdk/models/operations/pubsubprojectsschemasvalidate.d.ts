import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSchemasValidatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubProjectsSchemasValidateQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSchemasValidateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasValidateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasValidateSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSchemasValidateSecurityOption1;
    option2?: PubsubProjectsSchemasValidateSecurityOption2;
}
export declare class PubsubProjectsSchemasValidateRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSchemasValidatePathParams;
    queryParams: PubsubProjectsSchemasValidateQueryParams;
    request?: shared.ValidateSchemaRequest;
    security: PubsubProjectsSchemasValidateSecurity;
}
export declare class PubsubProjectsSchemasValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validateSchemaResponse?: Map<string, any>;
}
