import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimensions } from "./dimensions";

export enum ObaIconPositionEnum {
    ObaIconPositionUnspecified = "OBA_ICON_POSITION_UNSPECIFIED"
,    ObaIconPositionUpperRight = "OBA_ICON_POSITION_UPPER_RIGHT"
,    ObaIconPositionUpperLeft = "OBA_ICON_POSITION_UPPER_LEFT"
,    ObaIconPositionLowerRight = "OBA_ICON_POSITION_LOWER_RIGHT"
,    ObaIconPositionLowerLeft = "OBA_ICON_POSITION_LOWER_LEFT"
}


// ObaIcon
/** 
 * OBA Icon for a Creative
**/
export class ObaIcon extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickTrackingUrl" })
  clickTrackingUrl?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Dimensions;

  @Metadata({ data: "json, name=landingPageUrl" })
  landingPageUrl?: string;

  @Metadata({ data: "json, name=position" })
  position?: ObaIconPositionEnum;

  @Metadata({ data: "json, name=program" })
  program?: string;

  @Metadata({ data: "json, name=resourceMimeType" })
  resourceMimeType?: string;

  @Metadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @Metadata({ data: "json, name=viewTrackingUrl" })
  viewTrackingUrl?: string;
}
