import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubtitleDeliveryMethodEnum } from "./subtitledeliverymethodenum";
import { MediaStreamTypeEnum } from "./mediastreamtypeenum";



// MediaStream
/** 
 * Class MediaStream.
**/
export class MediaStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=AverageFrameRate" })
  averageFrameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=BitDepth" })
  bitDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=BitRate" })
  bitRate?: number;

  @SpeakeasyMetadata({ data: "json, name=ChannelLayout" })
  channelLayout?: string;

  @SpeakeasyMetadata({ data: "json, name=Channels" })
  channels?: number;

  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecTag" })
  codecTag?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecTimeBase" })
  codecTimeBase?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorPrimaries" })
  colorPrimaries?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorRange" })
  colorRange?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorSpace" })
  colorSpace?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorTransfer" })
  colorTransfer?: string;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod?: SubtitleDeliveryMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=DeliveryUrl" })
  deliveryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayTitle" })
  displayTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAVC" })
  isAvc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsAnamorphic" })
  isAnamorphic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsExternal" })
  isExternal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsExternalUrl" })
  isExternalUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsForced" })
  isForced?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsInterlaced" })
  isInterlaced?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsTextSubtitleStream" })
  isTextSubtitleStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=Level" })
  level?: number;

  @SpeakeasyMetadata({ data: "json, name=NalLengthSize" })
  nalLengthSize?: string;

  @SpeakeasyMetadata({ data: "json, name=PacketLength" })
  packetLength?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PixelFormat" })
  pixelFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=Profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=RealFrameRate" })
  realFrameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=RefFrames" })
  refFrames?: number;

  @SpeakeasyMetadata({ data: "json, name=SampleRate" })
  sampleRate?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=SupportsExternalStream" })
  supportsExternalStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TimeBase" })
  timeBase?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: MediaStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoRange" })
  videoRange?: string;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=localizedDefault" })
  localizedDefault?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedForced" })
  localizedForced?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedUndefined" })
  localizedUndefined?: string;
}


// MediaStreamInput
/** 
 * Class MediaStream.
**/
export class MediaStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AspectRatio" })
  aspectRatio?: string;

  @SpeakeasyMetadata({ data: "json, name=AverageFrameRate" })
  averageFrameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=BitDepth" })
  bitDepth?: number;

  @SpeakeasyMetadata({ data: "json, name=BitRate" })
  bitRate?: number;

  @SpeakeasyMetadata({ data: "json, name=ChannelLayout" })
  channelLayout?: string;

  @SpeakeasyMetadata({ data: "json, name=Channels" })
  channels?: number;

  @SpeakeasyMetadata({ data: "json, name=Codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecTag" })
  codecTag?: string;

  @SpeakeasyMetadata({ data: "json, name=CodecTimeBase" })
  codecTimeBase?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorPrimaries" })
  colorPrimaries?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorRange" })
  colorRange?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorSpace" })
  colorSpace?: string;

  @SpeakeasyMetadata({ data: "json, name=ColorTransfer" })
  colorTransfer?: string;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryMethod" })
  deliveryMethod?: SubtitleDeliveryMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=DeliveryUrl" })
  deliveryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=IsAVC" })
  isAvc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsAnamorphic" })
  isAnamorphic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsExternal" })
  isExternal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsExternalUrl" })
  isExternalUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsForced" })
  isForced?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsInterlaced" })
  isInterlaced?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=Level" })
  level?: number;

  @SpeakeasyMetadata({ data: "json, name=NalLengthSize" })
  nalLengthSize?: string;

  @SpeakeasyMetadata({ data: "json, name=PacketLength" })
  packetLength?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PixelFormat" })
  pixelFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=Profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "json, name=RealFrameRate" })
  realFrameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=RefFrames" })
  refFrames?: number;

  @SpeakeasyMetadata({ data: "json, name=SampleRate" })
  sampleRate?: number;

  @SpeakeasyMetadata({ data: "json, name=Score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=SupportsExternalStream" })
  supportsExternalStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TimeBase" })
  timeBase?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: MediaStreamTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=localizedDefault" })
  localizedDefault?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedForced" })
  localizedForced?: string;

  @SpeakeasyMetadata({ data: "json, name=localizedUndefined" })
  localizedUndefined?: string;
}
