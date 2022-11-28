import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1beta1FhirBigQueryDestination } from "./googlecloudhealthcarev1beta1fhirbigquerydestination";
import { DeidentifiedStoreDestination } from "./deidentifiedstoredestination";



// StreamConfig
/** 
 * Contains configuration for streaming FHIR export.
**/
export class StreamConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudHealthcareV1beta1FhirBigQueryDestination;

  @SpeakeasyMetadata({ data: "json, name=deidentifiedStoreDestination" })
  deidentifiedStoreDestination?: DeidentifiedStoreDestination;

  @SpeakeasyMetadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];
}
