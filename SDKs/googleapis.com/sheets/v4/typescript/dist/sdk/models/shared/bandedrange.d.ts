import { SpeakeasyBase } from "../../../internal/utils";
import { BandingProperties } from "./bandingproperties";
import { GridRange } from "./gridrange";
/**
 * A banded (alternating colors) range in a sheet.
**/
export declare class BandedRange extends SpeakeasyBase {
    bandedRangeId?: number;
    columnProperties?: BandingProperties;
    range?: GridRange;
    rowProperties?: BandingProperties;
}
