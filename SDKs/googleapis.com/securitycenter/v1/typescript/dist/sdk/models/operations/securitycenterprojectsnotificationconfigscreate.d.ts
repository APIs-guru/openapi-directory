import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsNotificationConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsNotificationConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    configId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsNotificationConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsNotificationConfigsCreateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsNotificationConfigsCreatePathParams;
    queryParams: SecuritycenterProjectsNotificationConfigsCreateQueryParams;
    request?: shared.NotificationConfigInput;
    security: SecuritycenterProjectsNotificationConfigsCreateSecurity;
}
export declare class SecuritycenterProjectsNotificationConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    notificationConfig?: shared.NotificationConfig;
    statusCode: number;
}
