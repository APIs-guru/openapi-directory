import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Slicer } from "./slicer";



// AddSlicerRequest
/** 
 * Adds a slicer to a sheet in the spreadsheet.
**/
export class AddSlicerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=slicer" })
  slicer?: Slicer;
}
