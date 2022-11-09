import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetFilesQueryParams extends SpeakeasyBase {
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
}
export declare class GetFilesRequest extends SpeakeasyBase {
    queryParams: GetFilesQueryParams;
}
export declare class GetFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
