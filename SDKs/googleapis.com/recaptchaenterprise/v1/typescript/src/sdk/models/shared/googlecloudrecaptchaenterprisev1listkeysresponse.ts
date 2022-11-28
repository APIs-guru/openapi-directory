import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1Key } from "./googlecloudrecaptchaenterprisev1key";



// GoogleCloudRecaptchaenterpriseV1ListKeysResponse
/** 
 * Response to request to list keys in a project.
**/
export class GoogleCloudRecaptchaenterpriseV1ListKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keys", elemType: GoogleCloudRecaptchaenterpriseV1Key })
  keys?: GoogleCloudRecaptchaenterpriseV1Key[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
