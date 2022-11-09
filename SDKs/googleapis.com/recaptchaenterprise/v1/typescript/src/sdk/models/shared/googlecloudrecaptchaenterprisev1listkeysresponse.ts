import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecaptchaenterpriseV1Key } from "./googlecloudrecaptchaenterprisev1key";


// GoogleCloudRecaptchaenterpriseV1ListKeysResponse
/** 
 * Response to request to list keys in a project.
**/
export class GoogleCloudRecaptchaenterpriseV1ListKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keys", elemType: shared.GoogleCloudRecaptchaenterpriseV1Key })
  keys?: GoogleCloudRecaptchaenterpriseV1Key[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
