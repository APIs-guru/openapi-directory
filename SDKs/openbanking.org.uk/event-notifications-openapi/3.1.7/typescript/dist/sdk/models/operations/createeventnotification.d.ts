import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CreateEventNotificationHeaders extends SpeakeasyBase {
    xFapiFinancialId: string;
    xFapiInteractionId?: string;
}
export declare class CreateEventNotificationRequest extends SpeakeasyBase {
    headers: CreateEventNotificationHeaders;
    request: string;
}
export declare class CreateEventNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
