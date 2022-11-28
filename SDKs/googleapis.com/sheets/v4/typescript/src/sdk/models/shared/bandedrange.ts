import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BandingProperties } from "./bandingproperties";
import { GridRange } from "./gridrange";



// BandedRange
/** 
 * A banded (alternating colors) range in a sheet.
**/
export class BandedRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandedRangeId" })
  bandedRangeId?: number;

  @SpeakeasyMetadata({ data: "json, name=columnProperties" })
  columnProperties?: BandingProperties;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=rowProperties" })
  rowProperties?: BandingProperties;
}
