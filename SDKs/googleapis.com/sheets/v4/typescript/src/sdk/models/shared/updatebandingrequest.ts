import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";



// UpdateBandingRequest
/** 
 * Updates properties of the supplied banded range.
**/
export class UpdateBandingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandedRange" })
  bandedRange?: BandedRange;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;
}
