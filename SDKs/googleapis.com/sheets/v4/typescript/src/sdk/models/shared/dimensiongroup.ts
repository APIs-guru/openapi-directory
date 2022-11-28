import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionRange } from "./dimensionrange";



// DimensionGroup
/** 
 * A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
**/
export class DimensionGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collapsed" })
  collapsed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=depth" })
  depth?: number;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: DimensionRange;
}
