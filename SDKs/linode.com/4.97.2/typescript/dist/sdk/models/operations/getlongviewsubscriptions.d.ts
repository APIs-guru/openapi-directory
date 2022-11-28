import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLongviewSubscriptionsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetLongviewSubscriptions200ApplicationJson extends SpeakeasyBase {
    data?: shared.LongviewSubscription[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLongviewSubscriptionsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLongviewSubscriptionsRequest extends SpeakeasyBase {
    queryParams: GetLongviewSubscriptionsQueryParams;
}
export declare class GetLongviewSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLongviewSubscriptions200ApplicationJsonObject?: GetLongviewSubscriptions200ApplicationJson;
    getLongviewSubscriptionsDefaultApplicationJsonObject?: GetLongviewSubscriptionsDefaultApplicationJson;
}
