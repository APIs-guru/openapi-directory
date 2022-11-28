import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemCountsQueryParams extends SpeakeasyBase {
    isFavorite?: boolean;
    userId?: string;
}
export declare class GetItemCountsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetItemCountsRequest extends SpeakeasyBase {
    queryParams: GetItemCountsQueryParams;
    security: GetItemCountsSecurity;
}
export declare class GetItemCountsResponse extends SpeakeasyBase {
    contentType: string;
    itemCounts?: shared.ItemCounts;
    statusCode: number;
}
