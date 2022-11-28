import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAppsTextSearchQueryParams extends SpeakeasyBase {
    fields: string;
    isOwned?: boolean;
    limit?: number;
    pageNumber?: number;
    query?: string;
    text: string;
    userId?: string;
}
export declare class GetAppsTextSearchRequest extends SpeakeasyBase {
    queryParams: GetAppsTextSearchQueryParams;
}
export declare class GetAppsTextSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
