import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteBandingRequest
/** 
 * Removes the banded range with the given ID from the spreadsheet.
**/
export class DeleteBandingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandedRangeId" })
  bandedRangeId?: number;
}
