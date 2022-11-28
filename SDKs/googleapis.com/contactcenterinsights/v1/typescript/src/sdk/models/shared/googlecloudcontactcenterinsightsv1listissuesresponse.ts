import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Issue } from "./googlecloudcontactcenterinsightsv1issue";



// GoogleCloudContactcenterinsightsV1ListIssuesResponse
/** 
 * The response of listing issues.
**/
export class GoogleCloudContactcenterinsightsV1ListIssuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issues", elemType: GoogleCloudContactcenterinsightsV1Issue })
  issues?: GoogleCloudContactcenterinsightsV1Issue[];
}
