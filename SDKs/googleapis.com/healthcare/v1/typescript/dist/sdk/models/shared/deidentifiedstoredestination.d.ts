import { SpeakeasyBase } from "../../../internal/utils";
import { DeidentifyConfig } from "./deidentifyconfig";
/**
 * Contains configuration for streaming de-identified FHIR export.
**/
export declare class DeidentifiedStoreDestination extends SpeakeasyBase {
    config?: DeidentifyConfig;
    store?: string;
}
