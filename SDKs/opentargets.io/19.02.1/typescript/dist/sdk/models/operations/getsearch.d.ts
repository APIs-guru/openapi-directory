import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetSearchQueryParams extends SpeakeasyBase {
    filter?: string;
    from?: string;
    q: string;
    size?: string;
}
export declare class GetSearchRequest extends SpeakeasyBase {
    queryParams: GetSearchQueryParams;
}
export declare class GetSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
