import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";

export enum TableColumnPropertiesWidthTypeEnum {
    WidthTypeUnspecified = "WIDTH_TYPE_UNSPECIFIED"
,    EvenlyDistributed = "EVENLY_DISTRIBUTED"
,    FixedWidth = "FIXED_WIDTH"
}


// TableColumnProperties
/** 
 * The properties of a column in a table.
**/
export class TableColumnProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=width" })
  width?: Dimension;

  @Metadata({ data: "json, name=widthType" })
  widthType?: TableColumnPropertiesWidthTypeEnum;
}
