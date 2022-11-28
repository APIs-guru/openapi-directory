import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAppsVersionsQueryParams extends SpeakeasyBase {
    developerId?: string;
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
}
export declare class GetAppsVersionsRequest extends SpeakeasyBase {
    queryParams: GetAppsVersionsQueryParams;
}
export declare class GetAppsVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
