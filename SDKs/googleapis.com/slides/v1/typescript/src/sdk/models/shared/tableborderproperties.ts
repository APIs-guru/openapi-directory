import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TableBorderFill } from "./tableborderfill";
import { Dimension } from "./dimension";

export enum TableBorderPropertiesDashStyleEnum {
    DashStyleUnspecified = "DASH_STYLE_UNSPECIFIED"
,    Solid = "SOLID"
,    Dot = "DOT"
,    Dash = "DASH"
,    DashDot = "DASH_DOT"
,    LongDash = "LONG_DASH"
,    LongDashDot = "LONG_DASH_DOT"
}


// TableBorderProperties
/** 
 * The border styling properties of the TableBorderCell.
**/
export class TableBorderProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=dashStyle" })
  dashStyle?: TableBorderPropertiesDashStyleEnum;

  @Metadata({ data: "json, name=tableBorderFill" })
  tableBorderFill?: TableBorderFill;

  @Metadata({ data: "json, name=weight" })
  weight?: Dimension;
}
