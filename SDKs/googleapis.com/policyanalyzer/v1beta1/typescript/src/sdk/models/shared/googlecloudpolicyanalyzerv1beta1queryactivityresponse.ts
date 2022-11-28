import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPolicyanalyzerV1beta1Activity } from "./googlecloudpolicyanalyzerv1beta1activity";



// GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse
/** 
 * Response to the `QueryActivity` method.
**/
export class GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: GoogleCloudPolicyanalyzerV1beta1Activity })
  activities?: GoogleCloudPolicyanalyzerV1beta1Activity[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
