import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Vp9CodecSettings
/** 
 * VP9 codec settings.
**/
export class Vp9CodecSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=bitrateBps" })
  bitrateBps?: number;

  @Metadata({ data: "json, name=crfLevel" })
  crfLevel?: number;

  @Metadata({ data: "json, name=frameRate" })
  frameRate?: number;

  @Metadata({ data: "json, name=gopDuration" })
  gopDuration?: string;

  @Metadata({ data: "json, name=gopFrameCount" })
  gopFrameCount?: number;

  @Metadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @Metadata({ data: "json, name=pixelFormat" })
  pixelFormat?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: string;

  @Metadata({ data: "json, name=rateControlMode" })
  rateControlMode?: string;

  @Metadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
