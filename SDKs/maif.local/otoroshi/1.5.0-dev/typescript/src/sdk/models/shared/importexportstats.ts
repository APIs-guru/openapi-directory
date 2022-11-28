import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportExportStats
/** 
 * Global stats for the current Otoroshi instances
**/
export class ImportExportStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calls" })
  calls: number;

  @SpeakeasyMetadata({ data: "json, name=dataIn" })
  dataIn: number;

  @SpeakeasyMetadata({ data: "json, name=dataOut" })
  dataOut: number;
}
