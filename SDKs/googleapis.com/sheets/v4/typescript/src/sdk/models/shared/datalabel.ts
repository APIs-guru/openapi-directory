import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChartData } from "./chartdata";
import { TextFormat } from "./textformat";

export enum DataLabelPlacementEnum {
    DataLabelPlacementUnspecified = "DATA_LABEL_PLACEMENT_UNSPECIFIED"
,    Center = "CENTER"
,    Left = "LEFT"
,    Right = "RIGHT"
,    Above = "ABOVE"
,    Below = "BELOW"
,    InsideEnd = "INSIDE_END"
,    InsideBase = "INSIDE_BASE"
,    OutsideEnd = "OUTSIDE_END"
}

export enum DataLabelTypeEnum {
    DataLabelTypeUnspecified = "DATA_LABEL_TYPE_UNSPECIFIED"
,    None = "NONE"
,    Data = "DATA"
,    Custom = "CUSTOM"
}


// DataLabel
/** 
 * Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
**/
export class DataLabel extends SpeakeasyBase {
  @Metadata({ data: "json, name=customLabelData" })
  customLabelData?: ChartData;

  @Metadata({ data: "json, name=placement" })
  placement?: DataLabelPlacementEnum;

  @Metadata({ data: "json, name=textFormat" })
  textFormat?: TextFormat;

  @Metadata({ data: "json, name=type" })
  type?: DataLabelTypeEnum;
}
