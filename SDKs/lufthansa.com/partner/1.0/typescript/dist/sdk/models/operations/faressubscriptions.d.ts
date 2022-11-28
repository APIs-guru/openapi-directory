import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FaresSubscriptionsQueryParams extends SpeakeasyBase {
    cabinClass: string;
    country?: string;
    destination: string;
    email: string;
    lang: string;
    origin: string;
    trackingid?: string;
    tripDuration: string;
}
export declare class FaresSubscriptionsHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class FaresSubscriptionsSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class FaresSubscriptionsRequest extends SpeakeasyBase {
    queryParams: FaresSubscriptionsQueryParams;
    headers: FaresSubscriptionsHeaders;
    security: FaresSubscriptionsSecurity;
}
export declare class FaresSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    faresSubscriptions200ApplicationJsonString?: string;
    statusCode: number;
}
