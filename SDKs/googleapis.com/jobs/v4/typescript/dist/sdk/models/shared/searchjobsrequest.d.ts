import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRankingInfo } from "./customrankinginfo";
import { HistogramQuery } from "./histogramquery";
import { JobQuery } from "./jobquery";
import { RequestMetadata } from "./requestmetadata";
export declare enum SearchJobsRequestDiversificationLevelEnum {
    DiversificationLevelUnspecified = "DIVERSIFICATION_LEVEL_UNSPECIFIED",
    Disabled = "DISABLED",
    Simple = "SIMPLE",
    OnePerCompany = "ONE_PER_COMPANY",
    TwoPerCompany = "TWO_PER_COMPANY",
    DiversifyByLooserSimilarity = "DIVERSIFY_BY_LOOSER_SIMILARITY"
}
export declare enum SearchJobsRequestJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED",
    JobViewIdOnly = "JOB_VIEW_ID_ONLY",
    JobViewMinimal = "JOB_VIEW_MINIMAL",
    JobViewSmall = "JOB_VIEW_SMALL",
    JobViewFull = "JOB_VIEW_FULL"
}
export declare enum SearchJobsRequestKeywordMatchModeEnum {
    KeywordMatchModeUnspecified = "KEYWORD_MATCH_MODE_UNSPECIFIED",
    KeywordMatchDisabled = "KEYWORD_MATCH_DISABLED",
    KeywordMatchAll = "KEYWORD_MATCH_ALL",
    KeywordMatchTitleOnly = "KEYWORD_MATCH_TITLE_ONLY"
}
export declare enum SearchJobsRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    JobSearch = "JOB_SEARCH",
    FeaturedJobSearch = "FEATURED_JOB_SEARCH"
}
/**
 * The Request body of the `SearchJobs` call.
**/
export declare class SearchJobsRequest extends SpeakeasyBase {
    customRankingInfo?: CustomRankingInfo;
    disableKeywordMatch?: boolean;
    diversificationLevel?: SearchJobsRequestDiversificationLevelEnum;
    enableBroadening?: boolean;
    histogramQueries?: HistogramQuery[];
    jobQuery?: JobQuery;
    jobView?: SearchJobsRequestJobViewEnum;
    keywordMatchMode?: SearchJobsRequestKeywordMatchModeEnum;
    maxPageSize?: number;
    offset?: number;
    orderBy?: string;
    pageToken?: string;
    requestMetadata?: RequestMetadata;
    searchMode?: SearchJobsRequestSearchModeEnum;
}
