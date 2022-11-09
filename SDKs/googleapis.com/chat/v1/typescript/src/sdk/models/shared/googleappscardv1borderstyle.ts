import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Color } from "./color";

export enum GoogleAppsCardV1BorderStyleTypeEnum {
    BorderTypeUnspecified = "BORDER_TYPE_UNSPECIFIED"
,    NoBorder = "NO_BORDER"
,    Stroke = "STROKE"
}


// GoogleAppsCardV1BorderStyle
/** 
 * Represents the complete border style applied to widgets.
**/
export class GoogleAppsCardV1BorderStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=cornerRadius" })
  cornerRadius?: number;

  @Metadata({ data: "json, name=strokeColor" })
  strokeColor?: Color;

  @Metadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1BorderStyleTypeEnum;
}
