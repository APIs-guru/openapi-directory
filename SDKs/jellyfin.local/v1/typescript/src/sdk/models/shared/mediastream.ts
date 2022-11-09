import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubtitleDeliveryMethodEnum } from "./subtitledeliverymethodenum";
import { MediaStreamTypeEnum } from "./mediastreamtypeenum";


// MediaStream
/** 
 * Class MediaStream.
**/
export class MediaStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @Metadata({ data: "json, name=AverageFrameRate" })
  averageFrameRate?: number;

  @Metadata({ data: "json, name=BitDepth" })
  bitDepth?: number;

  @Metadata({ data: "json, name=BitRate" })
  bitRate?: number;

  @Metadata({ data: "json, name=ChannelLayout" })
  channelLayout?: string;

  @Metadata({ data: "json, name=Channels" })
  channels?: number;

  @Metadata({ data: "json, name=Codec" })
  codec?: string;

  @Metadata({ data: "json, name=CodecTag" })
  codecTag?: string;

  @Metadata({ data: "json, name=CodecTimeBase" })
  codecTimeBase?: string;

  @Metadata({ data: "json, name=ColorPrimaries" })
  colorPrimaries?: string;

  @Metadata({ data: "json, name=ColorRange" })
  colorRange?: string;

  @Metadata({ data: "json, name=ColorSpace" })
  colorSpace?: string;

  @Metadata({ data: "json, name=ColorTransfer" })
  colorTransfer?: string;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod?: SubtitleDeliveryMethodEnum;

  @Metadata({ data: "json, name=DeliveryUrl" })
  deliveryUrl?: string;

  @Metadata({ data: "json, name=DisplayTitle" })
  displayTitle?: string;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Index" })
  index?: number;

  @Metadata({ data: "json, name=IsAVC" })
  isAvc?: boolean;

  @Metadata({ data: "json, name=IsAnamorphic" })
  isAnamorphic?: boolean;

  @Metadata({ data: "json, name=IsDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=IsExternal" })
  isExternal?: boolean;

  @Metadata({ data: "json, name=IsExternalUrl" })
  isExternalUrl?: boolean;

  @Metadata({ data: "json, name=IsForced" })
  isForced?: boolean;

  @Metadata({ data: "json, name=IsInterlaced" })
  isInterlaced?: boolean;

  @Metadata({ data: "json, name=IsTextSubtitleStream" })
  isTextSubtitleStream?: boolean;

  @Metadata({ data: "json, name=Language" })
  language?: string;

  @Metadata({ data: "json, name=Level" })
  level?: number;

  @Metadata({ data: "json, name=NalLengthSize" })
  nalLengthSize?: string;

  @Metadata({ data: "json, name=PacketLength" })
  packetLength?: number;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PixelFormat" })
  pixelFormat?: string;

  @Metadata({ data: "json, name=Profile" })
  profile?: string;

  @Metadata({ data: "json, name=RealFrameRate" })
  realFrameRate?: number;

  @Metadata({ data: "json, name=RefFrames" })
  refFrames?: number;

  @Metadata({ data: "json, name=SampleRate" })
  sampleRate?: number;

  @Metadata({ data: "json, name=Score" })
  score?: number;

  @Metadata({ data: "json, name=SupportsExternalStream" })
  supportsExternalStream?: boolean;

  @Metadata({ data: "json, name=TimeBase" })
  timeBase?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;

  @Metadata({ data: "json, name=Type" })
  type?: MediaStreamTypeEnum;

  @Metadata({ data: "json, name=VideoRange" })
  videoRange?: string;

  @Metadata({ data: "json, name=Width" })
  width?: number;

  @Metadata({ data: "json, name=localizedDefault" })
  localizedDefault?: string;

  @Metadata({ data: "json, name=localizedForced" })
  localizedForced?: string;

  @Metadata({ data: "json, name=localizedUndefined" })
  localizedUndefined?: string;
}
