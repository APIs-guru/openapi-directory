import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DimensionUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Emu = "EMU",
    Pt = "PT"
}
/**
 * A magnitude in a single direction in the specified units.
**/
export declare class Dimension extends SpeakeasyBase {
    magnitude?: number;
    unit?: DimensionUnitEnum;
}
