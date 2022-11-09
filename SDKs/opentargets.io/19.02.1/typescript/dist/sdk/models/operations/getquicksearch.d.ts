import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetQuickSearchQueryParams extends SpeakeasyBase {
    q: string;
    size?: string;
}
export declare class GetQuickSearchRequest extends SpeakeasyBase {
    queryParams: GetQuickSearchQueryParams;
}
export declare class GetQuickSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
