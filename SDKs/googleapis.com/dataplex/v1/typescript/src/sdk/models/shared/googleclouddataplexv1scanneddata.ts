import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ScannedDataIncrementalField } from "./googleclouddataplexv1scanneddataincrementalfield";



// GoogleCloudDataplexV1ScannedData
/** 
 * The data scanned during processing (e.g. in incremental DataScan)
**/
export class GoogleCloudDataplexV1ScannedData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incrementalField" })
  incrementalField?: GoogleCloudDataplexV1ScannedDataIncrementalField;
}
