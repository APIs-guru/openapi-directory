import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Size } from "./size";


// ObaIcon
/** 
 * Online Behavioral Advertiser icon.
**/
export class ObaIcon extends SpeakeasyBase {
  @Metadata({ data: "json, name=iconClickThroughUrl" })
  iconClickThroughUrl?: string;

  @Metadata({ data: "json, name=iconClickTrackingUrl" })
  iconClickTrackingUrl?: string;

  @Metadata({ data: "json, name=iconViewTrackingUrl" })
  iconViewTrackingUrl?: string;

  @Metadata({ data: "json, name=program" })
  program?: string;

  @Metadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @Metadata({ data: "json, name=size" })
  size?: Size;

  @Metadata({ data: "json, name=xPosition" })
  xPosition?: string;

  @Metadata({ data: "json, name=yPosition" })
  yPosition?: string;
}
