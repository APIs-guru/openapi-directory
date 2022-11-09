import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessnotificationsAccountsGetNotificationSettingPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessnotificationsAccountsGetNotificationSettingQueryParams extends SpeakeasyBase {
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
export declare class MybusinessnotificationsAccountsGetNotificationSettingRequest extends SpeakeasyBase {
    pathParams: MybusinessnotificationsAccountsGetNotificationSettingPathParams;
    queryParams: MybusinessnotificationsAccountsGetNotificationSettingQueryParams;
}
export declare class MybusinessnotificationsAccountsGetNotificationSettingResponse extends SpeakeasyBase {
    contentType: string;
    notificationSetting?: shared.NotificationSetting;
    statusCode: number;
}
