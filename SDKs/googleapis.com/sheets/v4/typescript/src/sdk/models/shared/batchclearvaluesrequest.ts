import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchClearValuesRequest
/** 
 * The request for clearing more than one range of values in a spreadsheet.
**/
export class BatchClearValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ranges" })
  ranges?: string[];
}
