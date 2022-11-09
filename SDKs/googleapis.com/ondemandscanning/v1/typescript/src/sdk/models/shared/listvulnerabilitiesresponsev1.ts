import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Occurrence } from "./occurrence";


// ListVulnerabilitiesResponseV1
/** 
 * ListVulnerabilitiesResponse contains a single page of vulnerabilities resulting from a scan.
**/
export class ListVulnerabilitiesResponseV1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=occurrences", elemType: shared.Occurrence })
  occurrences?: Occurrence[];
}
