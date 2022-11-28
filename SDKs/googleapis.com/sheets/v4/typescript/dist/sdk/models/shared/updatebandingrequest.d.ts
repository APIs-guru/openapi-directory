import { SpeakeasyBase } from "../../../internal/utils";
import { BandedRange } from "./bandedrange";
/**
 * Updates properties of the supplied banded range.
**/
export declare class UpdateBandingRequest extends SpeakeasyBase {
    bandedRange?: BandedRange;
    fields?: string;
}
