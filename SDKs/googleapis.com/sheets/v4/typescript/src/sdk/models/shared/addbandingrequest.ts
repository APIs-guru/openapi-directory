import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BandedRange } from "./bandedrange";


// AddBandingRequest
/** 
 * Adds a new banded range to the spreadsheet.
**/
export class AddBandingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandedRange" })
  bandedRange?: BandedRange;
}
