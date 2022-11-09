import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership } from "./googlecloudrecaptchaenterprisev1relatedaccountgroupmembership";


// GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
/** 
 * The response to a `SearchRelatedAccountGroupMemberships` call.
**/
export class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=relatedAccountGroupMemberships", elemType: shared.GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership })
  relatedAccountGroupMemberships?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[];
}
