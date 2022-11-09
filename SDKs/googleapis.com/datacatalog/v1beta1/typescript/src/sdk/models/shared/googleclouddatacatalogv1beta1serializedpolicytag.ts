import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1SerializedPolicyTag } from "./googleclouddatacatalogv1beta1serializedpolicytag";


// GoogleCloudDatacatalogV1beta1SerializedPolicyTag
/** 
 * Message representing one policy tag when exported as a nested proto.
**/
export class GoogleCloudDatacatalogV1beta1SerializedPolicyTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicyTags", elemType: shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag })
  childPolicyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=policyTag" })
  policyTag?: string;
}
