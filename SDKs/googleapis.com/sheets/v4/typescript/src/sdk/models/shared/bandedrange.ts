import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BandingProperties } from "./bandingproperties";
import { GridRange } from "./gridrange";
import { BandingProperties } from "./bandingproperties";


// BandedRange
/** 
 * A banded (alternating colors) range in a sheet.
**/
export class BandedRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandedRangeId" })
  bandedRangeId?: number;

  @Metadata({ data: "json, name=columnProperties" })
  columnProperties?: BandingProperties;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=rowProperties" })
  rowProperties?: BandingProperties;
}
