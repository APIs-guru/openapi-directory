import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DimensionUnitEnum {
    UnitUnspecified = "UNIT_UNSPECIFIED",
    Emu = "EMU",
    Pt = "PT"
}


// Dimension
/** 
 * A magnitude in a single direction in the specified units.
**/
export class Dimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=magnitude" })
  magnitude?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: DimensionUnitEnum;
}
