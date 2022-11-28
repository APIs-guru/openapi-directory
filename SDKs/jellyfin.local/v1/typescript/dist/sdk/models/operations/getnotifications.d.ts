import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetNotificationsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetNotificationsRequest extends SpeakeasyBase {
    pathParams: GetNotificationsPathParams;
    security: GetNotificationsSecurity;
}
export declare class GetNotificationsResponse extends SpeakeasyBase {
    contentType: string;
    notificationResultDto?: shared.NotificationResultDto;
    statusCode: number;
}
