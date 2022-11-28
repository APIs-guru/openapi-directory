import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNotifications200ApplicationJson extends SpeakeasyBase {
    data?: shared.Notification[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetNotificationsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNotificationsRequest extends SpeakeasyBase {
    security: GetNotificationsSecurity;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNotifications200ApplicationJsonObject?: GetNotifications200ApplicationJson;
    getNotificationsDefaultApplicationJsonObject?: GetNotificationsDefaultApplicationJson;
}
