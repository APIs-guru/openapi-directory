import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationTypesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetNotificationTypesRequest extends SpeakeasyBase {
    security: GetNotificationTypesSecurity;
}
export declare class GetNotificationTypesResponse extends SpeakeasyBase {
    contentType: string;
    notificationTypeInfos?: shared.NotificationTypeInfo[];
    statusCode: number;
}
