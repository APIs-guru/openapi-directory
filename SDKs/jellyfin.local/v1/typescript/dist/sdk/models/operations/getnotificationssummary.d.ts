import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationsSummaryPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetNotificationsSummarySecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetNotificationsSummaryRequest extends SpeakeasyBase {
    pathParams: GetNotificationsSummaryPathParams;
    security: GetNotificationsSummarySecurity;
}
export declare class GetNotificationsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    notificationsSummaryDto?: shared.NotificationsSummaryDto;
    statusCode: number;
}
