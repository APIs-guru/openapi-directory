import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReviewsQueryParams extends SpeakeasyBase {
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
}
export declare class GetReviewsRequest extends SpeakeasyBase {
    queryParams: GetReviewsQueryParams;
}
export declare class GetReviewsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
