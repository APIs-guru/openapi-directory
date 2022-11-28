import { SpeakeasyBase } from "../../../internal/utils";
import { DeidentifyConfig } from "./deidentifyconfig";
/**
 * Redacts identifying information from the specified dataset.
**/
export declare class DeidentifyDatasetRequest extends SpeakeasyBase {
    config?: DeidentifyConfig;
    destinationDataset?: string;
    gcsConfigUri?: string;
}
