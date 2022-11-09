import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetDevelopersQueryParams extends SpeakeasyBase {
    limit?: number;
    pageNumber?: number;
    query?: string;
    sort?: string;
}
export declare class GetDevelopersRequest extends SpeakeasyBase {
    queryParams: GetDevelopersQueryParams;
}
export declare class GetDevelopersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
