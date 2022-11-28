import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";


export enum GoogleAppsCardV1BorderStyleTypeEnum {
    BorderTypeUnspecified = "BORDER_TYPE_UNSPECIFIED",
    NoBorder = "NO_BORDER",
    Stroke = "STROKE"
}


// GoogleAppsCardV1BorderStyle
/** 
 * Represents the complete border style applied to items in a widget.
**/
export class GoogleAppsCardV1BorderStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cornerRadius" })
  cornerRadius?: number;

  @SpeakeasyMetadata({ data: "json, name=strokeColor" })
  strokeColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleAppsCardV1BorderStyleTypeEnum;
}
