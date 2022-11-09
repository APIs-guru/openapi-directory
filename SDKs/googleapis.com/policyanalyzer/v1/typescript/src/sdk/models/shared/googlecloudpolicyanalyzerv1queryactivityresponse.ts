import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPolicyanalyzerV1Activity } from "./googlecloudpolicyanalyzerv1activity";


// GoogleCloudPolicyanalyzerV1QueryActivityResponse
/** 
 * Response to the `QueryActivity` method.
**/
export class GoogleCloudPolicyanalyzerV1QueryActivityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.GoogleCloudPolicyanalyzerV1Activity })
  activities?: GoogleCloudPolicyanalyzerV1Activity[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
