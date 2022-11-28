import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1IssueModel } from "./googlecloudcontactcenterinsightsv1issuemodel";



// GoogleCloudContactcenterinsightsV1ListIssueModelsResponse
/** 
 * The response of listing issue models.
**/
export class GoogleCloudContactcenterinsightsV1ListIssueModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueModels", elemType: GoogleCloudContactcenterinsightsV1IssueModel })
  issueModels?: GoogleCloudContactcenterinsightsV1IssueModel[];
}
