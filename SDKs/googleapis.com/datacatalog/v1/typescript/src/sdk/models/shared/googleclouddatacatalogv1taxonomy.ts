import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";


export enum GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}


// GoogleCloudDatacatalogV1Taxonomy
/** 
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
**/
export class GoogleCloudDatacatalogV1Taxonomy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTagCount" })
  policyTagCount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyTimestamps" })
  taxonomyTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
}


// GoogleCloudDatacatalogV1TaxonomyInput
/** 
 * A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
**/
export class GoogleCloudDatacatalogV1TaxonomyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomyTimestamps" })
  taxonomyTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;
}
