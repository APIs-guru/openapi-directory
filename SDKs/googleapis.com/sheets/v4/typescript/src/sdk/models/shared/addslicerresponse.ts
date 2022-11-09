import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Slicer } from "./slicer";


// AddSlicerResponse
/** 
 * The result of adding a slicer to a spreadsheet.
**/
export class AddSlicerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=slicer" })
  slicer?: Slicer;
}
