import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IamPolicy
/** 
 * Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.
**/
export class IamPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=policyBlob" })
  policyBlob?: string;
}
