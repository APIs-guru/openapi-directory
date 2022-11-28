import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OptionalColor } from "./optionalcolor";
import { Dimension } from "./dimension";


export enum TableCellBorderDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED",
    Solid = "SOLID",
    Dot = "DOT",
    Dash = "DASH"
}


// TableCellBorder
/** 
 * A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.
**/
export class TableCellBorder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: OptionalColor;

  @SpeakeasyMetadata({ data: "json, name=dashStyle" })
  dashStyle?: TableCellBorderDashStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: Dimension;
}
