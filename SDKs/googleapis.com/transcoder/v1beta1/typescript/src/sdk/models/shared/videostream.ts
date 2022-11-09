import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoStream
/** 
 * Video stream resource.
**/
export class VideoStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowOpenGop" })
  allowOpenGop?: boolean;

  @Metadata({ data: "json, name=aqStrength" })
  aqStrength?: number;

  @Metadata({ data: "json, name=bFrameCount" })
  bFrameCount?: number;

  @Metadata({ data: "json, name=bPyramid" })
  bPyramid?: boolean;

  @Metadata({ data: "json, name=bitrateBps" })
  bitrateBps?: number;

  @Metadata({ data: "json, name=codec" })
  codec?: string;

  @Metadata({ data: "json, name=crfLevel" })
  crfLevel?: number;

  @Metadata({ data: "json, name=enableTwoPass" })
  enableTwoPass?: boolean;

  @Metadata({ data: "json, name=entropyCoder" })
  entropyCoder?: string;

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

  @Metadata({ data: "json, name=preset" })
  preset?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: string;

  @Metadata({ data: "json, name=rateControlMode" })
  rateControlMode?: string;

  @Metadata({ data: "json, name=tune" })
  tune?: string;

  @Metadata({ data: "json, name=vbvFullnessBits" })
  vbvFullnessBits?: number;

  @Metadata({ data: "json, name=vbvSizeBits" })
  vbvSizeBits?: number;

  @Metadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
