import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Slicer } from "./slicer";



// AddSlicerResponse
/** 
 * The result of adding a slicer to a spreadsheet.
**/
export class AddSlicerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=slicer" })
  slicer?: Slicer;
}
