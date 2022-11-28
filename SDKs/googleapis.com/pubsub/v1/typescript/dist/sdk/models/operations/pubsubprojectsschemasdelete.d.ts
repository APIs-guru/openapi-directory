import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSchemasDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubProjectsSchemasDeleteQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsSchemasDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasDeleteSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSchemasDeleteSecurityOption1;
    option2?: PubsubProjectsSchemasDeleteSecurityOption2;
}
export declare class PubsubProjectsSchemasDeleteRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSchemasDeletePathParams;
    queryParams: PubsubProjectsSchemasDeleteQueryParams;
    security: PubsubProjectsSchemasDeleteSecurity;
}
export declare class PubsubProjectsSchemasDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
