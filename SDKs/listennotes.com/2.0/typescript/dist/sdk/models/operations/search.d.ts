import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SearchTypeEnum {
    Episode = "episode",
    Podcast = "podcast",
    Curated = "curated"
}
export declare class SearchQueryParams extends SpeakeasyBase {
    episodeCountMax?: number;
    episodeCountMin?: number;
    genreIds?: string;
    language?: string;
    lenMax?: number;
    lenMin?: number;
    ncid?: string;
    ocid?: string;
    offset?: number;
    onlyIn?: string;
    publishedAfter?: number;
    publishedBefore?: number;
    q: string;
    region?: string;
    safeMode?: number;
    sortByDate?: number;
    type?: SearchTypeEnum;
}
export declare class SearchHeaders extends SpeakeasyBase {
    xListenApiKey: string;
}
export declare class SearchRequest extends SpeakeasyBase {
    queryParams: SearchQueryParams;
    headers: SearchHeaders;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
