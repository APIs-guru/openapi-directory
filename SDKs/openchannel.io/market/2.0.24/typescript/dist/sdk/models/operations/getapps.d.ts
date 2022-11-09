import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAppsQueryParams extends SpeakeasyBase {
    isOwner?: boolean;
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
    userId?: string;
}
export declare class GetAppsRequest extends SpeakeasyBase {
    queryParams: GetAppsQueryParams;
}
export declare class GetAppsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
