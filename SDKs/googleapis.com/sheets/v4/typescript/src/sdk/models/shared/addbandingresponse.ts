import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";



// AddBandingResponse
/** 
 * The result of adding a banded range.
**/
export class AddBandingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandedRange" })
  bandedRange?: BandedRange;
}
