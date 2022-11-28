import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BinLogCoordinates
/** 
 * Binary log coordinates.
**/
export class BinLogCoordinates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binLogFileName" })
  binLogFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=binLogPosition" })
  binLogPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
