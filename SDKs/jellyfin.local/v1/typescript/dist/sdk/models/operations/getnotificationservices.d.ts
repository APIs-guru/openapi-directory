import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNotificationServicesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetNotificationServicesRequest extends SpeakeasyBase {
    security: GetNotificationServicesSecurity;
}
export declare class GetNotificationServicesResponse extends SpeakeasyBase {
    contentType: string;
    nameIdPairs?: shared.NameIdPair[];
    statusCode: number;
}
