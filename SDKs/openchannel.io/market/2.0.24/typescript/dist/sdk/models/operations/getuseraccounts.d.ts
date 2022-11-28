import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUserAccountsQueryParams extends SpeakeasyBase {
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
}
export declare class GetUserAccountsRequest extends SpeakeasyBase {
    queryParams: GetUserAccountsQueryParams;
}
export declare class GetUserAccountsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
