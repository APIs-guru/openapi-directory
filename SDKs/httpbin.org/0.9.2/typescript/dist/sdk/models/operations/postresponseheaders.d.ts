import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostResponseHeadersQueryParams extends SpeakeasyBase {
    freeform?: string;
}
export declare class PostResponseHeadersRequest extends SpeakeasyBase {
    queryParams: PostResponseHeadersQueryParams;
}
export declare class PostResponseHeadersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
