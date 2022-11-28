import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudshellUsersEnvironmentsAuthorizePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudshellUsersEnvironmentsAuthorizeQueryParams extends SpeakeasyBase {
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
export declare class CloudshellUsersEnvironmentsAuthorizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudshellUsersEnvironmentsAuthorizeRequest extends SpeakeasyBase {
    pathParams: CloudshellUsersEnvironmentsAuthorizePathParams;
    queryParams: CloudshellUsersEnvironmentsAuthorizeQueryParams;
    request?: shared.AuthorizeEnvironmentRequest;
    security: CloudshellUsersEnvironmentsAuthorizeSecurity;
}
export declare class CloudshellUsersEnvironmentsAuthorizeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
