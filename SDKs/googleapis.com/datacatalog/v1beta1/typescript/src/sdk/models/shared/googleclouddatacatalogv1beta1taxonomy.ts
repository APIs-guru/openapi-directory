import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";

export enum GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED"
,    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}


// GoogleCloudDatacatalogV1beta1Taxonomy
/** 
 * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
**/
export class GoogleCloudDatacatalogV1beta1Taxonomy extends SpeakeasyBase {
  @Metadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policyTagCount" })
  policyTagCount?: number;

  @Metadata({ data: "json, name=taxonomyTimestamps" })
  taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
}
