import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrackingIssue
/** 
 * Information related to tracking the progress on resolving the error.
**/
export class TrackingIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
