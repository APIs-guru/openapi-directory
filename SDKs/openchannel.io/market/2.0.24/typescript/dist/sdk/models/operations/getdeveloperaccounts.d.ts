import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeveloperAccountsQueryParams extends SpeakeasyBase {
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
}
export declare class GetDeveloperAccountsRequest extends SpeakeasyBase {
    queryParams: GetDeveloperAccountsQueryParams;
}
export declare class GetDeveloperAccountsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
