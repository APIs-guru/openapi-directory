import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";
export declare enum DataLabelPlacementEnum {
    DataLabelPlacementUnspecified = "DATA_LABEL_PLACEMENT_UNSPECIFIED",
    Center = "CENTER",
    Left = "LEFT",
    Right = "RIGHT",
    Above = "ABOVE",
    Below = "BELOW",
    InsideEnd = "INSIDE_END",
    InsideBase = "INSIDE_BASE",
    OutsideEnd = "OUTSIDE_END"
}
export declare enum DataLabelTypeEnum {
    DataLabelTypeUnspecified = "DATA_LABEL_TYPE_UNSPECIFIED",
    None = "NONE",
    Data = "DATA",
    Custom = "CUSTOM"
}
/**
 * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
**/
export declare class DataLabel extends SpeakeasyBase {
    customLabelData?: ChartData;
    placement?: DataLabelPlacementEnum;
    textFormat?: TextFormat;
    type?: DataLabelTypeEnum;
}
