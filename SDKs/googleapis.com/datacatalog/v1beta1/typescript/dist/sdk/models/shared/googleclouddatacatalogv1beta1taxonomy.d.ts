import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
export declare enum GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
**/
export declare class GoogleCloudDatacatalogV1beta1Taxonomy extends SpeakeasyBase {
    activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[];
    description?: string;
    displayName?: string;
    name?: string;
    policyTagCount?: number;
    taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
}
/**
 * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
**/
export declare class GoogleCloudDatacatalogV1beta1TaxonomyInput extends SpeakeasyBase {
    activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[];
    description?: string;
    displayName?: string;
    taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
}
