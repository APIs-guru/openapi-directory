import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BandedRange } from "./bandedrange";


// UpdateBandingRequest
/** 
 * Updates properties of the supplied banded range.
**/
export class UpdateBandingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandedRange" })
  bandedRange?: BandedRange;

  @Metadata({ data: "json, name=fields" })
  fields?: string;
}
