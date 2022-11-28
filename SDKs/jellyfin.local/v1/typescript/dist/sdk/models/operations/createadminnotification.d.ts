import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAdminNotificationQueryParams extends SpeakeasyBase {
    description?: string;
    level?: shared.NotificationLevelEnum;
    name?: string;
    url?: string;
}
export declare class CreateAdminNotificationSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreateAdminNotificationRequest extends SpeakeasyBase {
    queryParams: CreateAdminNotificationQueryParams;
    security: CreateAdminNotificationSecurity;
}
export declare class CreateAdminNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
