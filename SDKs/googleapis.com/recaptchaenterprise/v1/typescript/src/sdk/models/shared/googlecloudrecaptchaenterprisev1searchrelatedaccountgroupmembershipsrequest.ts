import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest
/** 
 * The request message to search related account group memberships.
**/
export class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hashedAccountId" })
  hashedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
