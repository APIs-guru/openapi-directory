import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueAssignment } from "./googlecloudcontactcenterinsightsv1issueassignment";



// GoogleCloudContactcenterinsightsV1IssueModelResult
/** 
 * Issue Modeling result on a conversation.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueModel" })
  issueModel?: string;

  @SpeakeasyMetadata({ data: "json, name=issues", elemType: GoogleCloudContactcenterinsightsV1IssueAssignment })
  issues?: GoogleCloudContactcenterinsightsV1IssueAssignment[];
}
