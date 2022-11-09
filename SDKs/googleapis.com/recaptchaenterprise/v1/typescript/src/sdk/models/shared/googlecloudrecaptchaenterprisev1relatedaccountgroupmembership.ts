import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership
/** 
 * A membership in a group of related accounts.
**/
export class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=hashedAccountId" })
  hashedAccountId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
