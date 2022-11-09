import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatacatalogV1beta1SerializedPolicyTag } from "./googleclouddatacatalogv1beta1serializedpolicytag";

export enum GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED"
,    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}


// GoogleCloudDatacatalogV1beta1SerializedTaxonomy
/** 
 * Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.
**/
export class GoogleCloudDatacatalogV1beta1SerializedTaxonomy extends SpeakeasyBase {
  @Metadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=policyTags", elemType: shared.GoogleCloudDatacatalogV1beta1SerializedPolicyTag })
  policyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
}
