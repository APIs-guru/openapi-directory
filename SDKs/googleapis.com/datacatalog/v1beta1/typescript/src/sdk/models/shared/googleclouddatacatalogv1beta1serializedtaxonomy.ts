import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SerializedPolicyTag } from "./googleclouddatacatalogv1beta1serializedpolicytag";


export enum GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}


// GoogleCloudDatacatalogV1beta1SerializedTaxonomy
/** 
 * Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.
**/
export class GoogleCloudDatacatalogV1beta1SerializedTaxonomy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTags", elemType: GoogleCloudDatacatalogV1beta1SerializedPolicyTag })
  policyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
}
