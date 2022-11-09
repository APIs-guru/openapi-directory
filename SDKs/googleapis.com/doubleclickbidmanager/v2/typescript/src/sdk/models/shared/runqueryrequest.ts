import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataRange } from "./datarange";


// RunQueryRequest
/** 
 * Request to run a stored query to generate a report.
**/
export class RunQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataRange" })
  dataRange?: DataRange;
}
