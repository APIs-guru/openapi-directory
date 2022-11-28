import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataRange } from "./datarange";



// RunQueryRequest
/** 
 * Request to run a stored query to generate a report.
**/
export class RunQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataRange" })
  dataRange?: DataRange;
}
