import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1SerializedPolicyTag } from "./googleclouddatacatalogv1serializedpolicytag";

export enum GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED"
,    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}


// GoogleCloudDatacatalogV1SerializedTaxonomy
/** 
 * A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
**/
export class GoogleCloudDatacatalogV1SerializedTaxonomy extends SpeakeasyBase {
  @Metadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=policyTags", elemType: shared.GoogleCloudDatacatalogV1SerializedPolicyTag })
  policyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];
}
