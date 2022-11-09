import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup } from "./googlecloudrecaptchaenterprisev1relatedaccountgroup";


// GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
/** 
 * The response to a `ListRelatedAccountGroups` call.
**/
export class GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=relatedAccountGroups", elemType: shared.GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup })
  relatedAccountGroups?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[];
}
