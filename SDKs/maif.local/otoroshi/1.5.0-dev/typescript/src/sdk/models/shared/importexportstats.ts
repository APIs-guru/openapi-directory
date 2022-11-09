import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportExportStats
/** 
 * Global stats for the current Otoroshi instances
**/
export class ImportExportStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=calls" })
  calls: number;

  @Metadata({ data: "json, name=dataIn" })
  dataIn: number;

  @Metadata({ data: "json, name=dataOut" })
  dataOut: number;
}
