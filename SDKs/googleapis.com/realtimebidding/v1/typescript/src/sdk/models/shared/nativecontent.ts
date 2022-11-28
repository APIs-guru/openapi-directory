import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";



// NativeContent
/** 
 * Native content for a creative.
**/
export class NativeContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserName" })
  advertiserName?: string;

  @SpeakeasyMetadata({ data: "json, name=appIcon" })
  appIcon?: Image;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=callToAction" })
  callToAction?: string;

  @SpeakeasyMetadata({ data: "json, name=clickLinkUrl" })
  clickLinkUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=clickTrackingUrl" })
  clickTrackingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: Image;

  @SpeakeasyMetadata({ data: "json, name=priceDisplayText" })
  priceDisplayText?: string;

  @SpeakeasyMetadata({ data: "json, name=starRating" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=videoUrl" })
  videoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=videoVastXml" })
  videoVastXml?: string;
}
