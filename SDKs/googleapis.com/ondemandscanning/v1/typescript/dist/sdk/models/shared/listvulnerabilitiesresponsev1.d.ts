import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";
/**
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
**/
export declare class ListVulnerabilitiesResponseV1 extends SpeakeasyBase {
    nextPageToken?: string;
    occurrences?: Occurrence[];
}
