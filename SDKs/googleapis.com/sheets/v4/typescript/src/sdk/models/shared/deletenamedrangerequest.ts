import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteNamedRangeRequest
/** 
 * Removes the named range with the given ID from the spreadsheet.
**/
export class DeleteNamedRangeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;
}
