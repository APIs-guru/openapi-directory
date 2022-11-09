import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudContactcenterinsightsV1IssueAssignment
/** 
 * Information about the issue.
**/
export class GoogleCloudContactcenterinsightsV1IssueAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=issue" })
  issue?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
