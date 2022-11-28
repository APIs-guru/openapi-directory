import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SheetsChartReference } from "./sheetschartreference";



// LinkedContentReference
/** 
 * A reference to the external linked source content.
**/
export class LinkedContentReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sheetsChartReference" })
  sheetsChartReference?: SheetsChartReference;
}
