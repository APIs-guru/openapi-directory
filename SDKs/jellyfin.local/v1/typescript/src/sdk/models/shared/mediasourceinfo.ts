import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaProtocolEnum } from "./mediaprotocolenum";
import { IsoTypeEnum } from "./isotypeenum";
import { MediaAttachment } from "./mediaattachment";
import { MediaStream } from "./mediastream";
import { TransportStreamTimestampEnum } from "./transportstreamtimestampenum";
import { MediaSourceTypeEnum } from "./mediasourcetypeenum";
import { Video3DFormatEnum } from "./video3dformatenum";
import { VideoTypeEnum } from "./videotypeenum";
import { MediaStreamInput } from "./mediastream";



export class MediaSourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyzeDurationMs" })
  analyzeDurationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=Bitrate" })
  bitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=BufferMs" })
  bufferMs?: number;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultAudioStreamIndex" })
  defaultAudioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubtitleStreamIndex" })
  defaultSubtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=EncoderPath" })
  encoderPath?: string;

  @SpeakeasyMetadata({ data: "json, name=EncoderProtocol" })
  encoderProtocol?: MediaProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=Formats" })
  formats?: string[];

  @SpeakeasyMetadata({ data: "json, name=GenPtsInput" })
  genPtsInput?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IgnoreDts" })
  ignoreDts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IgnoreIndex" })
  ignoreIndex?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsInfiniteStream" })
  isInfiniteStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRemote" })
  isRemote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsoType" })
  isoType?: IsoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaAttachments", elemType: MediaAttachment })
  mediaAttachments?: MediaAttachment[];

  @SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStream })
  mediaStreams?: MediaStream[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OpenToken" })
  openToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: MediaProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=ReadAtNativeFramerate" })
  readAtNativeFramerate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequiredHttpHeaders" })
  requiredHttpHeaders?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RequiresClosing" })
  requiresClosing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequiresLooping" })
  requiresLooping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequiresOpening" })
  requiresOpening?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=SupportsDirectPlay" })
  supportsDirectPlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsDirectStream" })
  supportsDirectStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsProbing" })
  supportsProbing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsTranscoding" })
  supportsTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: TransportStreamTimestampEnum;

  @SpeakeasyMetadata({ data: "json, name=TranscodingContainer" })
  transcodingContainer?: string;

  @SpeakeasyMetadata({ data: "json, name=TranscodingSubProtocol" })
  transcodingSubProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=TranscodingUrl" })
  transcodingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: MediaSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Video3DFormat" })
  video3DFormat?: Video3DFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoType" })
  videoType?: VideoTypeEnum;
}


export class MediaSourceInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyzeDurationMs" })
  analyzeDurationMs?: number;

  @SpeakeasyMetadata({ data: "json, name=Bitrate" })
  bitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=BufferMs" })
  bufferMs?: number;

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultAudioStreamIndex" })
  defaultAudioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubtitleStreamIndex" })
  defaultSubtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=EncoderPath" })
  encoderPath?: string;

  @SpeakeasyMetadata({ data: "json, name=EncoderProtocol" })
  encoderProtocol?: MediaProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=Formats" })
  formats?: string[];

  @SpeakeasyMetadata({ data: "json, name=GenPtsInput" })
  genPtsInput?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=IgnoreDts" })
  ignoreDts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IgnoreIndex" })
  ignoreIndex?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsInfiniteStream" })
  isInfiniteStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsRemote" })
  isRemote?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsoType" })
  isoType?: IsoTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "json, name=MediaAttachments", elemType: MediaAttachment })
  mediaAttachments?: MediaAttachment[];

  @SpeakeasyMetadata({ data: "json, name=MediaStreams", elemType: MediaStreamInput })
  mediaStreams?: MediaStreamInput[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OpenToken" })
  openToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: MediaProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=ReadAtNativeFramerate" })
  readAtNativeFramerate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequiredHttpHeaders" })
  requiredHttpHeaders?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=RequiresClosing" })
  requiresClosing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequiresLooping" })
  requiresLooping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RequiresOpening" })
  requiresOpening?: boolean;

  @SpeakeasyMetadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=SupportsDirectPlay" })
  supportsDirectPlay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsDirectStream" })
  supportsDirectStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsProbing" })
  supportsProbing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SupportsTranscoding" })
  supportsTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: TransportStreamTimestampEnum;

  @SpeakeasyMetadata({ data: "json, name=TranscodingContainer" })
  transcodingContainer?: string;

  @SpeakeasyMetadata({ data: "json, name=TranscodingSubProtocol" })
  transcodingSubProtocol?: string;

  @SpeakeasyMetadata({ data: "json, name=TranscodingUrl" })
  transcodingUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: MediaSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Video3DFormat" })
  video3DFormat?: Video3DFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=VideoType" })
  videoType?: VideoTypeEnum;
}
