import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
export declare enum GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
**/
export declare class GoogleCloudDatacatalogV1Taxonomy extends SpeakeasyBase {
    activatedPolicyTypes?: GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum[];
    description?: string;
    displayName?: string;
    name?: string;
    policyTagCount?: number;
    taxonomyTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
}
/**
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
**/
export declare class GoogleCloudDatacatalogV1TaxonomyInput extends SpeakeasyBase {
    activatedPolicyTypes?: GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum[];
    description?: string;
    displayName?: string;
    taxonomyTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;
}
