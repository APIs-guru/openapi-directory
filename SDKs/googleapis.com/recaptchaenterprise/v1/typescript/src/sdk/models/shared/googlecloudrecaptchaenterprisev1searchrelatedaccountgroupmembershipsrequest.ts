import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest
/** 
 * The request message to search related account group memberships.
**/
export class GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=hashedAccountId" })
  hashedAccountId?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
