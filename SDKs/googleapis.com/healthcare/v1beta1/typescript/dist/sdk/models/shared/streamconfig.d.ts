import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1beta1FhirBigQueryDestination } from "./googlecloudhealthcarev1beta1fhirbigquerydestination";
import { DeidentifiedStoreDestination } from "./deidentifiedstoredestination";
/**
 * Contains configuration for streaming FHIR export.
**/
export declare class StreamConfig extends SpeakeasyBase {
    bigqueryDestination?: GoogleCloudHealthcareV1beta1FhirBigQueryDestination;
    deidentifiedStoreDestination?: DeidentifiedStoreDestination;
    resourceTypes?: string[];
}
