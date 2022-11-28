import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SolidFill } from "./solidfill";



// TableBorderFill
/** 
 * The fill of the border.
**/
export class TableBorderFill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
