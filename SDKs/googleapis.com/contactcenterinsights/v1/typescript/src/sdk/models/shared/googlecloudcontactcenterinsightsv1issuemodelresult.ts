import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1IssueAssignment } from "./googlecloudcontactcenterinsightsv1issueassignment";


// GoogleCloudContactcenterinsightsV1IssueModelResult
/** 
 * Issue Modeling result on a conversation.
**/
export class GoogleCloudContactcenterinsightsV1IssueModelResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueModel" })
  issueModel?: string;

  @Metadata({ data: "json, name=issues", elemType: shared.GoogleCloudContactcenterinsightsV1IssueAssignment })
  issues?: GoogleCloudContactcenterinsightsV1IssueAssignment[];
}
