import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";


export enum GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}


// GoogleCloudDatacatalogV1beta1Taxonomy
/** 
 * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
**/
export class GoogleCloudDatacatalogV1beta1Taxonomy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policyTagCount" })
  policyTagCount?: number;

  @SpeakeasyMetadata({ data: "json, name=taxonomyTimestamps" })
  taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
}


// GoogleCloudDatacatalogV1beta1TaxonomyInput
/** 
 * A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
**/
export class GoogleCloudDatacatalogV1beta1TaxonomyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activatedPolicyTypes" })
  activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=taxonomyTimestamps" })
  taxonomyTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
}
