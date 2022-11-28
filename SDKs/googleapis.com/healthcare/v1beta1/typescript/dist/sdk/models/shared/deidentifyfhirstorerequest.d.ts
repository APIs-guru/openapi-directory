import { SpeakeasyBase } from "../../../internal/utils";
import { DeidentifyConfig } from "./deidentifyconfig";
import { FhirFilter } from "./fhirfilter";
/**
 * Creates a new FHIR store with sensitive information de-identified.
**/
export declare class DeidentifyFhirStoreRequest extends SpeakeasyBase {
    config?: DeidentifyConfig;
    destinationStore?: string;
    gcsConfigUri?: string;
    resourceFilter?: FhirFilter;
    skipModifiedResources?: boolean;
}
