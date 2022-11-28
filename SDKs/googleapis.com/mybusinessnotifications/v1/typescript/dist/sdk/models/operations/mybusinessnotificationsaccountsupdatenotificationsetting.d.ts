import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessnotificationsAccountsUpdateNotificationSettingPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessnotificationsAccountsUpdateNotificationSettingRequest extends SpeakeasyBase {
    pathParams: MybusinessnotificationsAccountsUpdateNotificationSettingPathParams;
    queryParams: MybusinessnotificationsAccountsUpdateNotificationSettingQueryParams;
    request?: shared.NotificationSetting;
}
export declare class MybusinessnotificationsAccountsUpdateNotificationSettingResponse extends SpeakeasyBase {
    contentType: string;
    notificationSetting?: shared.NotificationSetting;
    statusCode: number;
}
