import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Occurrence } from "./occurrence";



// ListVulnerabilitiesResponse
/** 
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
**/
export class ListVulnerabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=occurrences", elemType: Occurrence })
  occurrences?: Occurrence[];
}
