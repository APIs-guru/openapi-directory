import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackingIssue
/** 
 * Information related to tracking the progress on resolving the error.
**/
export class TrackingIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
