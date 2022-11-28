import { SpeakeasyBase } from "../../../internal/utils";
import { HistogramQueryResult } from "./histogramqueryresult";
import { Location } from "./location";
import { MatchingJob } from "./matchingjob";
import { ResponseMetadata } from "./responsemetadata";
import { SpellingCorrection } from "./spellingcorrection";
/**
 * Response for SearchJob method.
**/
export declare class SearchJobsResponse extends SpeakeasyBase {
    broadenedQueryJobsCount?: number;
    histogramQueryResults?: HistogramQueryResult[];
    locationFilters?: Location[];
    matchingJobs?: MatchingJob[];
    metadata?: ResponseMetadata;
    nextPageToken?: string;
    spellCorrection?: SpellingCorrection;
    totalSize?: number;
}
