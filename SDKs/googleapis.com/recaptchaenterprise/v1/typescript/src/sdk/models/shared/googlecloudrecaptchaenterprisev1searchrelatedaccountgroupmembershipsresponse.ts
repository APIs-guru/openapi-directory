import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership } from "./googlecloudrecaptchaenterprisev1relatedaccountgroupmembership";



// GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
/** 
 * The response to a `SearchRelatedAccountGroupMemberships` call.
**/
export class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedAccountGroupMemberships", elemType: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership })
  relatedAccountGroupMemberships?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
}
