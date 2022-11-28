import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteNamedRangeRequest
/** 
 * Removes the named range with the given ID from the spreadsheet.
**/
export class DeleteNamedRangeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;
}
