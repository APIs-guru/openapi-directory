import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SerializedPolicyTag } from "./googleclouddatacatalogv1beta1serializedpolicytag";
export declare enum GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.
**/
export declare class GoogleCloudDatacatalogV1beta1SerializedTaxonomy extends SpeakeasyBase {
    activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum[];
    description?: string;
    displayName?: string;
    policyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
}
