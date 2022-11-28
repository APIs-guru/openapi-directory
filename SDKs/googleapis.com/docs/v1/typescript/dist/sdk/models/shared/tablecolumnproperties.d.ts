import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
export declare enum TableColumnPropertiesWidthTypeEnum {
    WidthTypeUnspecified = "WIDTH_TYPE_UNSPECIFIED",
    EvenlyDistributed = "EVENLY_DISTRIBUTED",
    FixedWidth = "FIXED_WIDTH"
}
/**
 * The properties of a column in a table.
**/
export declare class TableColumnProperties extends SpeakeasyBase {
    width?: Dimension;
    widthType?: TableColumnPropertiesWidthTypeEnum;
}
