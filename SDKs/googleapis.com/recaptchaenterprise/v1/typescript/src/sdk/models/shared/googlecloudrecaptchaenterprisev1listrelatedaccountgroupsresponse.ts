import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup } from "./googlecloudrecaptchaenterprisev1relatedaccountgroup";



// GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
/** 
 * The response to a `ListRelatedAccountGroups` call.
**/
export class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=relatedAccountGroups", elemType: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup })
  relatedAccountGroups?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[];
}
