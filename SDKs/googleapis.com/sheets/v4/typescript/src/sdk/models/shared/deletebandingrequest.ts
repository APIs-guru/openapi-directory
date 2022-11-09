import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteBandingRequest
/** 
 * Removes the banded range with the given ID from the spreadsheet.
**/
export class DeleteBandingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandedRangeId" })
  bandedRangeId?: number;
}
