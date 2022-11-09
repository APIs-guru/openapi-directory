import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchClearValuesRequest
/** 
 * The request for clearing more than one range of values in a spreadsheet.
**/
export class BatchClearValuesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ranges" })
  ranges?: string[];
}
