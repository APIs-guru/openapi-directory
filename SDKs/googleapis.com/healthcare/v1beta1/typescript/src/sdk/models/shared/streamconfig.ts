import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudHealthcareV1beta1FhirBigQueryDestination } from "./googlecloudhealthcarev1beta1fhirbigquerydestination";
import { DeidentifiedStoreDestination } from "./deidentifiedstoredestination";


// StreamConfig
/** 
 * Contains configuration for streaming FHIR export.
**/
export class StreamConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigqueryDestination" })
  bigqueryDestination?: GoogleCloudHealthcareV1beta1FhirBigQueryDestination;

  @Metadata({ data: "json, name=deidentifiedStoreDestination" })
  deidentifiedStoreDestination?: DeidentifiedStoreDestination;

  @Metadata({ data: "json, name=resourceTypes" })
  resourceTypes?: string[];
}
