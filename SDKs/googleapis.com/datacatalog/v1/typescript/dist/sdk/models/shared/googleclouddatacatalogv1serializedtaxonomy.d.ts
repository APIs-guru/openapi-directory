import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedPolicyTag } from "./googleclouddatacatalogv1serializedpolicytag";
export declare enum GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
**/
export declare class GoogleCloudDatacatalogV1SerializedTaxonomy extends SpeakeasyBase {
    activatedPolicyTypes?: GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum[];
    description?: string;
    displayName?: string;
    policyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];
}
