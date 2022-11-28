import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership
/** 
 * A membership in a group of related accounts.
**/
export class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hashedAccountId" })
  hashedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
