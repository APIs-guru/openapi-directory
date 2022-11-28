import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1SerializedPolicyTag
/** 
 * Message representing one policy tag when exported as a nested proto.
**/
export class GoogleCloudDatacatalogV1beta1SerializedPolicyTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicyTags", elemType: GoogleCloudDatacatalogV1beta1SerializedPolicyTag })
  childPolicyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTag" })
  policyTag?: string;
}
