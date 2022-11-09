import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1SerializedPolicyTag } from "./googleclouddatacatalogv1serializedpolicytag";


// GoogleCloudDatacatalogV1SerializedPolicyTag
/** 
 * A nested protocol buffer that represents a policy tag and all its descendants.
**/
export class GoogleCloudDatacatalogV1SerializedPolicyTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicyTags", elemType: shared.GoogleCloudDatacatalogV1SerializedPolicyTag })
  childPolicyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=policyTag" })
  policyTag?: string;
}
