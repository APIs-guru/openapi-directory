import { SpeakeasyBase } from "../../../internal/utils";
import { Result } from "./result";
import { Promotion } from "./promotion";
/**
 * Custom search request metadata.
**/
export declare class SearchQueriesNextPage extends SpeakeasyBase {
    count?: number;
    cr?: string;
    cx?: string;
    dateRestrict?: string;
    disableCnTwTranslation?: string;
    exactTerms?: string;
    excludeTerms?: string;
    fileType?: string;
    filter?: string;
    gl?: string;
    googleHost?: string;
    highRange?: string;
    hl?: string;
    hq?: string;
    imgColorType?: string;
    imgDominantColor?: string;
    imgSize?: string;
    imgType?: string;
    inputEncoding?: string;
    language?: string;
    linkSite?: string;
    lowRange?: string;
    orTerms?: string;
    outputEncoding?: string;
    relatedSite?: string;
    rights?: string;
    safe?: string;
    searchTerms?: string;
    searchType?: string;
    siteSearch?: string;
    siteSearchFilter?: string;
    sort?: string;
    startIndex?: number;
    startPage?: number;
    title?: string;
    totalResults?: string;
}
/**
 * Custom search request metadata.
**/
export declare class SearchQueriesPreviousPage extends SpeakeasyBase {
    count?: number;
    cr?: string;
    cx?: string;
    dateRestrict?: string;
    disableCnTwTranslation?: string;
    exactTerms?: string;
    excludeTerms?: string;
    fileType?: string;
    filter?: string;
    gl?: string;
    googleHost?: string;
    highRange?: string;
    hl?: string;
    hq?: string;
    imgColorType?: string;
    imgDominantColor?: string;
    imgSize?: string;
    imgType?: string;
    inputEncoding?: string;
    language?: string;
    linkSite?: string;
    lowRange?: string;
    orTerms?: string;
    outputEncoding?: string;
    relatedSite?: string;
    rights?: string;
    safe?: string;
    searchTerms?: string;
    searchType?: string;
    siteSearch?: string;
    siteSearchFilter?: string;
    sort?: string;
    startIndex?: number;
    startPage?: number;
    title?: string;
    totalResults?: string;
}
/**
 * Custom search request metadata.
**/
export declare class SearchQueriesRequest extends SpeakeasyBase {
    count?: number;
    cr?: string;
    cx?: string;
    dateRestrict?: string;
    disableCnTwTranslation?: string;
    exactTerms?: string;
    excludeTerms?: string;
    fileType?: string;
    filter?: string;
    gl?: string;
    googleHost?: string;
    highRange?: string;
    hl?: string;
    hq?: string;
    imgColorType?: string;
    imgDominantColor?: string;
    imgSize?: string;
    imgType?: string;
    inputEncoding?: string;
    language?: string;
    linkSite?: string;
    lowRange?: string;
    orTerms?: string;
    outputEncoding?: string;
    relatedSite?: string;
    rights?: string;
    safe?: string;
    searchTerms?: string;
    searchType?: string;
    siteSearch?: string;
    siteSearchFilter?: string;
    sort?: string;
    startIndex?: number;
    startPage?: number;
    title?: string;
    totalResults?: string;
}
/**
 * Query metadata for the previous, current, and next pages of results.
**/
export declare class SearchQueries extends SpeakeasyBase {
    nextPage?: SearchQueriesNextPage[];
    previousPage?: SearchQueriesPreviousPage[];
    request?: SearchQueriesRequest[];
}
/**
 * Metadata about a search operation.
**/
export declare class SearchSearchInformation extends SpeakeasyBase {
    formattedSearchTime?: string;
    formattedTotalResults?: string;
    searchTime?: number;
    totalResults?: string;
}
/**
 * Spell correction information for a query.
**/
export declare class SearchSpelling extends SpeakeasyBase {
    correctedQuery?: string;
    htmlCorrectedQuery?: string;
}
/**
 * OpenSearch template and URL.
**/
export declare class SearchUrl extends SpeakeasyBase {
    template?: string;
    type?: string;
}
/**
 * Response to a custom search request.
**/
export declare class Search extends SpeakeasyBase {
    context?: Map<string, any>;
    items?: Result[];
    kind?: string;
    promotions?: Promotion[];
    queries?: SearchQueries;
    searchInformation?: SearchSearchInformation;
    spelling?: SearchSpelling;
    url?: SearchUrl;
}
