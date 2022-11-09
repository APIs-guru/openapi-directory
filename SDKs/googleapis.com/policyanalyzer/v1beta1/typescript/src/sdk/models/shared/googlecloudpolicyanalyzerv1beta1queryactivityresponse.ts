import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicyanalyzerV1beta1Activity } from "./googlecloudpolicyanalyzerv1beta1activity";


// GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse
/** 
 * Response to the `QueryActivity` method.
**/
export class GoogleCloudPolicyanalyzerV1beta1QueryActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.GoogleCloudPolicyanalyzerV1beta1Activity })
  activities?: GoogleCloudPolicyanalyzerV1beta1Activity[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
