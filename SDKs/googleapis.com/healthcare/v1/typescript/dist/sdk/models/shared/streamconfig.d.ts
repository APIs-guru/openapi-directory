import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1FhirBigQueryDestination } from "./googlecloudhealthcarev1fhirbigquerydestination";
import { DeidentifiedStoreDestination } from "./deidentifiedstoredestination";
/**
 * Contains configuration for streaming FHIR export.
**/
export declare class StreamConfig extends SpeakeasyBase {
    bigqueryDestination?: GoogleCloudHealthcareV1FhirBigQueryDestination;
    deidentifiedStoreDestination?: DeidentifiedStoreDestination;
    resourceTypes?: string[];
}
