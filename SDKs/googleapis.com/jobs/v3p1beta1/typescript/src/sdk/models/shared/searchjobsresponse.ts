import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HistogramQueryResult } from "./histogramqueryresult";
import { HistogramResults } from "./histogramresults";
import { Location } from "./location";
import { MatchingJob } from "./matchingjob";
import { ResponseMetadata } from "./responsemetadata";
import { SpellingCorrection } from "./spellingcorrection";


// SearchJobsResponse
/** 
 * Output only. Response for SearchJob method.
**/
export class SearchJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=broadenedQueryJobsCount" })
  broadenedQueryJobsCount?: number;

  @Metadata({ data: "json, name=estimatedTotalSize" })
  estimatedTotalSize?: number;

  @Metadata({ data: "json, name=histogramQueryResults", elemType: shared.HistogramQueryResult })
  histogramQueryResults?: HistogramQueryResult[];

  @Metadata({ data: "json, name=histogramResults" })
  histogramResults?: HistogramResults;

  @Metadata({ data: "json, name=locationFilters", elemType: shared.Location })
  locationFilters?: Location[];

  @Metadata({ data: "json, name=matchingJobs", elemType: shared.MatchingJob })
  matchingJobs?: MatchingJob[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=spellCorrection" })
  spellCorrection?: SpellingCorrection;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
