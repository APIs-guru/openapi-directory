import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";



// AddBandingRequest
/** 
 * Adds a new banded range to the spreadsheet.
**/
export class AddBandingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandedRange" })
  bandedRange?: BandedRange;
}
