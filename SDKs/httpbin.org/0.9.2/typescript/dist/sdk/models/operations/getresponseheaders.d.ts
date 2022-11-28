import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetResponseHeadersQueryParams extends SpeakeasyBase {
    freeform?: string;
}
export declare class GetResponseHeadersRequest extends SpeakeasyBase {
    queryParams: GetResponseHeadersQueryParams;
}
export declare class GetResponseHeadersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
