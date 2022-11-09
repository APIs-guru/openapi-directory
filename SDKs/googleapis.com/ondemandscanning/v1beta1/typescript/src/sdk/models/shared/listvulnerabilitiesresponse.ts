import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Occurrence } from "./occurrence";


// ListVulnerabilitiesResponse
/** 
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
**/
export class ListVulnerabilitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=occurrences", elemType: shared.Occurrence })
  occurrences?: Occurrence[];
}
