import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership } from "./googlecloudrecaptchaenterprisev1relatedaccountgroupmembership";



// GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse
/** 
 * The response to a `ListRelatedAccountGroupMemberships` call.
**/
export class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedAccountGroupMemberships", elemType: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership })
  relatedAccountGroupMemberships?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
}
