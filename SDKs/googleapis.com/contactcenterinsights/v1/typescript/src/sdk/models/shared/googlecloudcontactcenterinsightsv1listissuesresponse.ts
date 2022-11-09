import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1Issue } from "./googlecloudcontactcenterinsightsv1issue";


// GoogleCloudContactcenterinsightsV1ListIssuesResponse
/** 
 * The response of listing issues.
**/
export class GoogleCloudContactcenterinsightsV1ListIssuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=issues", elemType: shared.GoogleCloudContactcenterinsightsV1Issue })
  issues?: GoogleCloudContactcenterinsightsV1Issue[];
}
