import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MediaProtocolEnum } from "./mediaprotocolenum";
import { IsoTypeEnum } from "./isotypeenum";
import { MediaAttachment } from "./mediaattachment";
import { MediaStream } from "./mediastream";
import { MediaProtocolEnum } from "./mediaprotocolenum";
import { TransportStreamTimestampEnum } from "./transportstreamtimestampenum";
import { MediaSourceTypeEnum } from "./mediasourcetypeenum";
import { Video3DFormatEnum } from "./video3dformatenum";
import { VideoTypeEnum } from "./videotypeenum";


export class MediaSourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyzeDurationMs" })
  analyzeDurationMs?: number;

  @Metadata({ data: "json, name=Bitrate" })
  bitrate?: number;

  @Metadata({ data: "json, name=BufferMs" })
  bufferMs?: number;

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=DefaultAudioStreamIndex" })
  defaultAudioStreamIndex?: number;

  @Metadata({ data: "json, name=DefaultSubtitleStreamIndex" })
  defaultSubtitleStreamIndex?: number;

  @Metadata({ data: "json, name=ETag" })
  eTag?: string;

  @Metadata({ data: "json, name=EncoderPath" })
  encoderPath?: string;

  @Metadata({ data: "json, name=EncoderProtocol" })
  encoderProtocol?: MediaProtocolEnum;

  @Metadata({ data: "json, name=Formats" })
  formats?: string[];

  @Metadata({ data: "json, name=GenPtsInput" })
  genPtsInput?: boolean;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=IgnoreDts" })
  ignoreDts?: boolean;

  @Metadata({ data: "json, name=IgnoreIndex" })
  ignoreIndex?: boolean;

  @Metadata({ data: "json, name=IsInfiniteStream" })
  isInfiniteStream?: boolean;

  @Metadata({ data: "json, name=IsRemote" })
  isRemote?: boolean;

  @Metadata({ data: "json, name=IsoType" })
  isoType?: IsoTypeEnum;

  @Metadata({ data: "json, name=LiveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "json, name=MediaAttachments", elemType: shared.MediaAttachment })
  mediaAttachments?: MediaAttachment[];

  @Metadata({ data: "json, name=MediaStreams", elemType: shared.MediaStream })
  mediaStreams?: MediaStream[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OpenToken" })
  openToken?: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: MediaProtocolEnum;

  @Metadata({ data: "json, name=ReadAtNativeFramerate" })
  readAtNativeFramerate?: boolean;

  @Metadata({ data: "json, name=RequiredHttpHeaders" })
  requiredHttpHeaders?: Map<string, string>;

  @Metadata({ data: "json, name=RequiresClosing" })
  requiresClosing?: boolean;

  @Metadata({ data: "json, name=RequiresLooping" })
  requiresLooping?: boolean;

  @Metadata({ data: "json, name=RequiresOpening" })
  requiresOpening?: boolean;

  @Metadata({ data: "json, name=RunTimeTicks" })
  runTimeTicks?: number;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=SupportsDirectPlay" })
  supportsDirectPlay?: boolean;

  @Metadata({ data: "json, name=SupportsDirectStream" })
  supportsDirectStream?: boolean;

  @Metadata({ data: "json, name=SupportsProbing" })
  supportsProbing?: boolean;

  @Metadata({ data: "json, name=SupportsTranscoding" })
  supportsTranscoding?: boolean;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: TransportStreamTimestampEnum;

  @Metadata({ data: "json, name=TranscodingContainer" })
  transcodingContainer?: string;

  @Metadata({ data: "json, name=TranscodingSubProtocol" })
  transcodingSubProtocol?: string;

  @Metadata({ data: "json, name=TranscodingUrl" })
  transcodingUrl?: string;

  @Metadata({ data: "json, name=Type" })
  type?: MediaSourceTypeEnum;

  @Metadata({ data: "json, name=Video3DFormat" })
  video3DFormat?: Video3DFormatEnum;

  @Metadata({ data: "json, name=VideoType" })
  videoType?: VideoTypeEnum;
}
