import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramQueryResult } from "./histogramqueryresult";
import { HistogramResults } from "./histogramresults";
import { Location } from "./location";
import { MatchingJob } from "./matchingjob";
import { ResponseMetadata } from "./responsemetadata";
import { SpellingCorrection } from "./spellingcorrection";
/**
 * Output only. Response for SearchJob method.
**/
export declare class SearchJobsResponse extends SpeakeasyBase {
    broadenedQueryJobsCount?: number;
    estimatedTotalSize?: number;
    histogramQueryResults?: HistogramQueryResult[];
    histogramResults?: HistogramResults;
    locationFilters?: Location[];
    matchingJobs?: MatchingJob[];
    metadata?: ResponseMetadata;
    nextPageToken?: string;
    spellCorrection?: SpellingCorrection;
    totalSize?: number;
}
