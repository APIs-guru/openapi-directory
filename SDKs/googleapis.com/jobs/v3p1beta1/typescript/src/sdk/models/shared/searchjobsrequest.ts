import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomRankingInfo } from "./customrankinginfo";
import { HistogramFacets } from "./histogramfacets";
import { HistogramQuery } from "./histogramquery";
import { JobQuery } from "./jobquery";
import { RequestMetadata } from "./requestmetadata";


export enum SearchJobsRequestDiversificationLevelEnum {
    DiversificationLevelUnspecified = "DIVERSIFICATION_LEVEL_UNSPECIFIED",
    Disabled = "DISABLED",
    Simple = "SIMPLE"
}

export enum SearchJobsRequestJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED",
    JobViewIdOnly = "JOB_VIEW_ID_ONLY",
    JobViewMinimal = "JOB_VIEW_MINIMAL",
    JobViewSmall = "JOB_VIEW_SMALL",
    JobViewFull = "JOB_VIEW_FULL"
}

export enum SearchJobsRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    JobSearch = "JOB_SEARCH",
    FeaturedJobSearch = "FEATURED_JOB_SEARCH"
}


// SearchJobsRequest
/** 
 * Input only. The Request body of the `SearchJobs` call.
**/
export class SearchJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customRankingInfo" })
  customRankingInfo?: CustomRankingInfo;

  @SpeakeasyMetadata({ data: "json, name=disableKeywordMatch" })
  disableKeywordMatch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=diversificationLevel" })
  diversificationLevel?: SearchJobsRequestDiversificationLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=enableBroadening" })
  enableBroadening?: boolean;

  @SpeakeasyMetadata({ data: "json, name=histogramFacets" })
  histogramFacets?: HistogramFacets;

  @SpeakeasyMetadata({ data: "json, name=histogramQueries", elemType: HistogramQuery })
  histogramQueries?: HistogramQuery[];

  @SpeakeasyMetadata({ data: "json, name=jobQuery" })
  jobQuery?: JobQuery;

  @SpeakeasyMetadata({ data: "json, name=jobView" })
  jobView?: SearchJobsRequestJobViewEnum;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMetadata" })
  requestMetadata?: RequestMetadata;

  @SpeakeasyMetadata({ data: "json, name=requirePreciseResultSize" })
  requirePreciseResultSize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=searchMode" })
  searchMode?: SearchJobsRequestSearchModeEnum;
}
