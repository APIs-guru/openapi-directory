import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicyanalyzerV1Activity } from "./googlecloudpolicyanalyzerv1activity";



// GoogleCloudPolicyanalyzerV1QueryActivityResponse
/** 
 * Response to the `QueryActivity` method.
**/
export class GoogleCloudPolicyanalyzerV1QueryActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: GoogleCloudPolicyanalyzerV1Activity })
  activities?: GoogleCloudPolicyanalyzerV1Activity[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
