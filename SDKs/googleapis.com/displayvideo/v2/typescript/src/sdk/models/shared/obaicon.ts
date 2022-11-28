import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimensions } from "./dimensions";


export enum ObaIconPositionEnum {
    ObaIconPositionUnspecified = "OBA_ICON_POSITION_UNSPECIFIED",
    ObaIconPositionUpperRight = "OBA_ICON_POSITION_UPPER_RIGHT",
    ObaIconPositionUpperLeft = "OBA_ICON_POSITION_UPPER_LEFT",
    ObaIconPositionLowerRight = "OBA_ICON_POSITION_LOWER_RIGHT",
    ObaIconPositionLowerLeft = "OBA_ICON_POSITION_LOWER_LEFT"
}


// ObaIcon
/** 
 * OBA Icon for a Creative
**/
export class ObaIcon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" })
  clickTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @SpeakeasyMetadata({ data: "json, name=landingPageUrl" })
  landingPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: ObaIconPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=program" })
  program?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceMimeType" })
  resourceMimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=viewTrackingUrl" })
  viewTrackingUrl?: string;
}
