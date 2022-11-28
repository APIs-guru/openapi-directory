import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramFacets } from "./histogramfacets";
import { JobQuery } from "./jobquery";
import { RequestMetadata } from "./requestmetadata";
export declare enum SearchJobsRequestDiversificationLevelEnum {
    DiversificationLevelUnspecified = "DIVERSIFICATION_LEVEL_UNSPECIFIED",
    Disabled = "DISABLED",
    Simple = "SIMPLE"
}
export declare enum SearchJobsRequestJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED",
    JobViewIdOnly = "JOB_VIEW_ID_ONLY",
    JobViewMinimal = "JOB_VIEW_MINIMAL",
    JobViewSmall = "JOB_VIEW_SMALL",
    JobViewFull = "JOB_VIEW_FULL"
}
export declare enum SearchJobsRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    JobSearch = "JOB_SEARCH",
    FeaturedJobSearch = "FEATURED_JOB_SEARCH"
}
/**
 * Input only. The Request body of the `SearchJobs` call.
**/
export declare class SearchJobsRequest extends SpeakeasyBase {
    disableKeywordMatch?: boolean;
    diversificationLevel?: SearchJobsRequestDiversificationLevelEnum;
    enableBroadening?: boolean;
    histogramFacets?: HistogramFacets;
    jobQuery?: JobQuery;
    jobView?: SearchJobsRequestJobViewEnum;
    offset?: number;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    requestMetadata?: RequestMetadata;
    requirePreciseResultSize?: boolean;
    searchMode?: SearchJobsRequestSearchModeEnum;
}
