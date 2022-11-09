import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BandedRange } from "./bandedrange";


// AddBandingResponse
/** 
 * The result of adding a banded range.
**/
export class AddBandingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandedRange" })
  bandedRange?: BandedRange;
}
