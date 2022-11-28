import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=broadenedQueryJobsCount" })
  broadenedQueryJobsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=estimatedTotalSize" })
  estimatedTotalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=histogramResults" })
  histogramResults?: HistogramResults;

  @SpeakeasyMetadata({ data: "json, name=locationFilters", elemType: Location })
  locationFilters?: Location[];

  @SpeakeasyMetadata({ data: "json, name=matchingJobs", elemType: MatchingJob })
  matchingJobs?: MatchingJob[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ResponseMetadata;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=spellCorrection" })
  spellCorrection?: SpellingCorrection;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
