import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeidentifyConfig } from "./deidentifyconfig";


// DeidentifyDatasetRequest
/** 
 * Redacts identifying information from the specified dataset.
**/
export class DeidentifyDatasetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: DeidentifyConfig;

  @Metadata({ data: "json, name=destinationDataset" })
  destinationDataset?: string;

  @Metadata({ data: "json, name=gcsConfigUri" })
  gcsConfigUri?: string;
}
