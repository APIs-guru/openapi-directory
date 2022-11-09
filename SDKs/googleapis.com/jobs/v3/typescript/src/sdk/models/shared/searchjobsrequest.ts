import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HistogramFacets } from "./histogramfacets";
import { JobQuery } from "./jobquery";
import { RequestMetadata } from "./requestmetadata";

export enum SearchJobsRequestDiversificationLevelEnum {
    DiversificationLevelUnspecified = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Simple = "SIMPLE"
}

export enum SearchJobsRequestJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED"
,    JobViewIdOnly = "JOB_VIEW_ID_ONLY"
,    JobViewMinimal = "JOB_VIEW_MINIMAL"
,    JobViewSmall = "JOB_VIEW_SMALL"
,    JobViewFull = "JOB_VIEW_FULL"
}

export enum SearchJobsRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED"
,    JobSearch = "JOB_SEARCH"
,    FeaturedJobSearch = "FEATURED_JOB_SEARCH"
}


// SearchJobsRequest
/** 
 * Input only. The Request body of the `SearchJobs` call.
**/
export class SearchJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableKeywordMatch" })
  disableKeywordMatch?: boolean;

  @Metadata({ data: "json, name=diversificationLevel" })
  diversificationLevel?: SearchJobsRequestDiversificationLevelEnum;

  @Metadata({ data: "json, name=enableBroadening" })
  enableBroadening?: boolean;

  @Metadata({ data: "json, name=histogramFacets" })
  histogramFacets?: HistogramFacets;

  @Metadata({ data: "json, name=jobQuery" })
  jobQuery?: JobQuery;

  @Metadata({ data: "json, name=jobView" })
  jobView?: SearchJobsRequestJobViewEnum;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=requestMetadata" })
  requestMetadata?: RequestMetadata;

  @Metadata({ data: "json, name=requirePreciseResultSize" })
  requirePreciseResultSize?: boolean;

  @Metadata({ data: "json, name=searchMode" })
  searchMode?: SearchJobsRequestSearchModeEnum;
}
