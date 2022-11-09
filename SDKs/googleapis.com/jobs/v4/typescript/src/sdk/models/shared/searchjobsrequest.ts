import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomRankingInfo } from "./customrankinginfo";
import { HistogramQuery } from "./histogramquery";
import { JobQuery } from "./jobquery";
import { RequestMetadata } from "./requestmetadata";

export enum SearchJobsRequestDiversificationLevelEnum {
    DiversificationLevelUnspecified = "DIVERSIFICATION_LEVEL_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Simple = "SIMPLE"
,    OnePerCompany = "ONE_PER_COMPANY"
,    TwoPerCompany = "TWO_PER_COMPANY"
,    DiversifyByLooserSimilarity = "DIVERSIFY_BY_LOOSER_SIMILARITY"
}

export enum SearchJobsRequestJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED"
,    JobViewIdOnly = "JOB_VIEW_ID_ONLY"
,    JobViewMinimal = "JOB_VIEW_MINIMAL"
,    JobViewSmall = "JOB_VIEW_SMALL"
,    JobViewFull = "JOB_VIEW_FULL"
}

export enum SearchJobsRequestKeywordMatchModeEnum {
    KeywordMatchModeUnspecified = "KEYWORD_MATCH_MODE_UNSPECIFIED"
,    KeywordMatchDisabled = "KEYWORD_MATCH_DISABLED"
,    KeywordMatchAll = "KEYWORD_MATCH_ALL"
,    KeywordMatchTitleOnly = "KEYWORD_MATCH_TITLE_ONLY"
}

export enum SearchJobsRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED"
,    JobSearch = "JOB_SEARCH"
,    FeaturedJobSearch = "FEATURED_JOB_SEARCH"
}


// SearchJobsRequest
/** 
 * The Request body of the `SearchJobs` call.
**/
export class SearchJobsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customRankingInfo" })
  customRankingInfo?: CustomRankingInfo;

  @Metadata({ data: "json, name=disableKeywordMatch" })
  disableKeywordMatch?: boolean;

  @Metadata({ data: "json, name=diversificationLevel" })
  diversificationLevel?: SearchJobsRequestDiversificationLevelEnum;

  @Metadata({ data: "json, name=enableBroadening" })
  enableBroadening?: boolean;

  @Metadata({ data: "json, name=histogramQueries", elemType: shared.HistogramQuery })
  histogramQueries?: HistogramQuery[];

  @Metadata({ data: "json, name=jobQuery" })
  jobQuery?: JobQuery;

  @Metadata({ data: "json, name=jobView" })
  jobView?: SearchJobsRequestJobViewEnum;

  @Metadata({ data: "json, name=keywordMatchMode" })
  keywordMatchMode?: SearchJobsRequestKeywordMatchModeEnum;

  @Metadata({ data: "json, name=maxPageSize" })
  maxPageSize?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=requestMetadata" })
  requestMetadata?: RequestMetadata;

  @Metadata({ data: "json, name=searchMode" })
  searchMode?: SearchJobsRequestSearchModeEnum;
}
