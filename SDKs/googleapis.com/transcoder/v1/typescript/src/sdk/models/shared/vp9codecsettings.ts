import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Vp9CodecSettings
/** 
 * VP9 codec settings.
**/
export class Vp9CodecSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bitrateBps" })
  bitrateBps?: number;

  @SpeakeasyMetadata({ data: "json, name=crfLevel" })
  crfLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=frameRate" })
  frameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=gopDuration" })
  gopDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=gopFrameCount" })
  gopFrameCount?: number;

  @SpeakeasyMetadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=pixelFormat" })
  pixelFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=rateControlMode" })
  rateControlMode?: string;

  @SpeakeasyMetadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
