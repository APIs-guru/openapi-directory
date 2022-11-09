import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Slicer } from "./slicer";


// AddSlicerRequest
/** 
 * Adds a slicer to a sheet in the spreadsheet.
**/
export class AddSlicerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=slicer" })
  slicer?: Slicer;
}
