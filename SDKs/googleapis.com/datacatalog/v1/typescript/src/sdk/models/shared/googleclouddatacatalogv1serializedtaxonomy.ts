import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedPolicyTag } from "./googleclouddatacatalogv1serializedpolicytag";


export enum GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}


// GoogleCloudDatacatalogV1SerializedTaxonomy
/** 
 * A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
**/
export class GoogleCloudDatacatalogV1SerializedTaxonomy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTags", elemType: GoogleCloudDatacatalogV1SerializedPolicyTag })
  policyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];
}
