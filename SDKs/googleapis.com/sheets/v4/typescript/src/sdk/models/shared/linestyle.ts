import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LineStyleTypeEnum {
    LineDashTypeUnspecified = "LINE_DASH_TYPE_UNSPECIFIED"
,    Invisible = "INVISIBLE"
,    Custom = "CUSTOM"
,    Solid = "SOLID"
,    Dotted = "DOTTED"
,    MediumDashed = "MEDIUM_DASHED"
,    MediumDashedDotted = "MEDIUM_DASHED_DOTTED"
,    LongDashed = "LONG_DASHED"
,    LongDashedDotted = "LONG_DASHED_DOTTED"
}


// LineStyle
/** 
 * Properties that describe the style of a line.
**/
export class LineStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: LineStyleTypeEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
