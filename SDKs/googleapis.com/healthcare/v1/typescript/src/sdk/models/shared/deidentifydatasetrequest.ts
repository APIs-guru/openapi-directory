import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeidentifyConfig } from "./deidentifyconfig";



// DeidentifyDatasetRequest
/** 
 * Redacts identifying information from the specified dataset.
**/
export class DeidentifyDatasetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: DeidentifyConfig;

  @SpeakeasyMetadata({ data: "json, name=destinationDataset" })
  destinationDataset?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsConfigUri" })
  gcsConfigUri?: string;
}
