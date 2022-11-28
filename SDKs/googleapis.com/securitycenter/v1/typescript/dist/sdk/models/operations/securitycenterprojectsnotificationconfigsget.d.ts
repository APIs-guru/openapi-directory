import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsNotificationConfigsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterProjectsNotificationConfigsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsNotificationConfigsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsNotificationConfigsGetRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsNotificationConfigsGetPathParams;
    queryParams: SecuritycenterProjectsNotificationConfigsGetQueryParams;
    security: SecuritycenterProjectsNotificationConfigsGetSecurity;
}
export declare class SecuritycenterProjectsNotificationConfigsGetResponse extends SpeakeasyBase {
    contentType: string;
    notificationConfig?: shared.NotificationConfig;
    statusCode: number;
}
