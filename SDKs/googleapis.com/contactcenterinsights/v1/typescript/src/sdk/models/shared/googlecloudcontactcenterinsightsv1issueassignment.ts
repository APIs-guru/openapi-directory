import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudContactcenterinsightsV1IssueAssignment
/** 
 * Information about the issue.
**/
export class GoogleCloudContactcenterinsightsV1IssueAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
