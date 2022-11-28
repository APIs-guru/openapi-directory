import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudshellOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudshellOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudshellOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudshellOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudshellOperationsDeletePathParams;
    queryParams: CloudshellOperationsDeleteQueryParams;
    security: CloudshellOperationsDeleteSecurity;
}
export declare class CloudshellOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
