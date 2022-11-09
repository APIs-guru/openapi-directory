import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SubscriptionsApiListQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class SubscriptionsApiListRequest extends SpeakeasyBase {
    queryParams: SubscriptionsApiListQueryParams;
    request: any;
}
export declare class SubscriptionsApiListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subscriptionViews?: shared.SubscriptionView[];
}
