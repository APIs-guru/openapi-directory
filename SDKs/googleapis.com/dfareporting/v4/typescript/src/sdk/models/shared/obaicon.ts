import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Size } from "./size";



// ObaIcon
/** 
 * Online Behavioral Advertiser icon.
**/
export class ObaIcon extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=iconClickThroughUrl" })
  iconClickThroughUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=iconClickTrackingUrl" })
  iconClickTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=iconViewTrackingUrl" })
  iconViewTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=program" })
  program?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceUrl" })
  resourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: Size;

  @SpeakeasyMetadata({ data: "json, name=xPosition" })
  xPosition?: string;

  @SpeakeasyMetadata({ data: "json, name=yPosition" })
  yPosition?: string;
}
