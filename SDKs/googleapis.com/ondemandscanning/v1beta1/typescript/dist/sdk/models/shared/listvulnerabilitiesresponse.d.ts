import { SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";
/**
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
**/
export declare class ListVulnerabilitiesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    occurrences?: Occurrence[];
}
