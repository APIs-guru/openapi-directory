import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BinLogCoordinates
/** 
 * Binary log coordinates.
**/
export class BinLogCoordinates extends SpeakeasyBase {
  @Metadata({ data: "json, name=binLogFileName" })
  binLogFileName?: string;

  @Metadata({ data: "json, name=binLogPosition" })
  binLogPosition?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
