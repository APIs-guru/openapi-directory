import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// H264CodecSettings
/** 
 * H264 codec settings.
**/
export class H264CodecSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowOpenGop" })
  allowOpenGop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aqStrength" })
  aqStrength?: number;

  @SpeakeasyMetadata({ data: "json, name=bFrameCount" })
  bFrameCount?: number;

  @SpeakeasyMetadata({ data: "json, name=bPyramid" })
  bPyramid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bitrateBps" })
  bitrateBps?: number;

  @SpeakeasyMetadata({ data: "json, name=crfLevel" })
  crfLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=enableTwoPass" })
  enableTwoPass?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entropyCoder" })
  entropyCoder?: string;

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

  @SpeakeasyMetadata({ data: "json, name=preset" })
  preset?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=rateControlMode" })
  rateControlMode?: string;

  @SpeakeasyMetadata({ data: "json, name=tune" })
  tune?: string;

  @SpeakeasyMetadata({ data: "json, name=vbvFullnessBits" })
  vbvFullnessBits?: number;

  @SpeakeasyMetadata({ data: "json, name=vbvSizeBits" })
  vbvSizeBits?: number;

  @SpeakeasyMetadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
