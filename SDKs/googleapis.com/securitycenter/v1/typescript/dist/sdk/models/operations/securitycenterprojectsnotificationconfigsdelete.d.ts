import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsNotificationConfigsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterProjectsNotificationConfigsDeleteQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsNotificationConfigsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsNotificationConfigsDeleteRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsNotificationConfigsDeletePathParams;
    queryParams: SecuritycenterProjectsNotificationConfigsDeleteQueryParams;
    security: SecuritycenterProjectsNotificationConfigsDeleteSecurity;
}
export declare class SecuritycenterProjectsNotificationConfigsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
