import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DimensionUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED"
,    Emu = "EMU"
,    Pt = "PT"
}


// Dimension
/** 
 * A magnitude in a single direction in the specified units.
**/
export class Dimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: DimensionUnitEnum;
}
