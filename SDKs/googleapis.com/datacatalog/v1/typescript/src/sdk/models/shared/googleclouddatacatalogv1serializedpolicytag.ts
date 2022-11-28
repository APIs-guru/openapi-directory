import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1SerializedPolicyTag
/** 
 * A nested protocol buffer that represents a policy tag and all its descendants.
**/
export class GoogleCloudDatacatalogV1SerializedPolicyTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicyTags", elemType: GoogleCloudDatacatalogV1SerializedPolicyTag })
  childPolicyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTag" })
  policyTag?: string;
}
