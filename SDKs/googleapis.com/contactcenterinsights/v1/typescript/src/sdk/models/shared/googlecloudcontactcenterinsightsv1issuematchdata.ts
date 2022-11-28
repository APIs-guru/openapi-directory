import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueAssignment } from "./googlecloudcontactcenterinsightsv1issueassignment";



// GoogleCloudContactcenterinsightsV1IssueMatchData
/** 
 * The data for an issue match annotation.
**/
export class GoogleCloudContactcenterinsightsV1IssueMatchData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueAssignment" })
  issueAssignment?: GoogleCloudContactcenterinsightsV1IssueAssignment;
}
