import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1IssueModel } from "./googlecloudcontactcenterinsightsv1issuemodel";


// GoogleCloudContactcenterinsightsV1ListIssueModelsResponse
/** 
 * The response of listing issue models.
**/
export class GoogleCloudContactcenterinsightsV1ListIssueModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueModels", elemType: shared.GoogleCloudContactcenterinsightsV1IssueModel })
  issueModels?: GoogleCloudContactcenterinsightsV1IssueModel[];
}
