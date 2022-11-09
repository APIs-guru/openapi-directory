import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";

export enum TableCellBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED"
,    Solid = "SOLID"
,    Dot = "DOT"
,    Dash = "DASH"
}


// TableCellBorder
/** 
 * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
**/
export class TableCellBorder extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: OptionalColor;

  @Metadata({ data: "json, name=dashStyle" })
  dashStyle?: TableCellBorderDashStyleEnum;

  @Metadata({ data: "json, name=width" })
  width?: Dimension;
}
