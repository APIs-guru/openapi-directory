import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SheetsChartReference } from "./sheetschartreference";


// LinkedContentReference
/** 
 * A reference to the external linked source content.
**/
export class LinkedContentReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=sheetsChartReference" })
  sheetsChartReference?: SheetsChartReference;
}
