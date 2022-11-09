import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SolidFill } from "./solidfill";


// TableBorderFill
/** 
 * The fill of the border.
**/
export class TableBorderFill extends SpeakeasyBase {
  @Metadata({ data: "json, name=solidFill" })
  solidFill?: SolidFill;
}
