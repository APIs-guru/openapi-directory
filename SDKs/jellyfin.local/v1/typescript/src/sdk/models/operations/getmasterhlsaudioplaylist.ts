import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMasterHlsAudioPlaylistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetMasterHlsAudioPlaylistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allowAudioStreamCopy" })
  allowAudioStreamCopy?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allowVideoStreamCopy" })
  allowVideoStreamCopy?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audioBitRate" })
  audioBitRate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audioChannels" })
  audioChannels?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audioCodec" })
  audioCodec?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audioSampleRate" })
  audioSampleRate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=breakOnNonKeyFrames" })
  breakOnNonKeyFrames?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=context" })
  context?: shared.EncodingContextEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" })
  copyTimestamps?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=cpuCoreLimit" })
  cpuCoreLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deInterlace" })
  deInterlace?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceProfileId" })
  deviceProfileId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableAdaptiveBitrateStreaming" })
  enableAdaptiveBitrateStreaming?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableAutoStreamCopy" })
  enableAutoStreamCopy?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableMpegtsM2TsMode" })
  enableMpegtsM2TsMode?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=framerate" })
  framerate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAudioBitDepth" })
  maxAudioBitDepth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxFramerate" })
  maxFramerate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxRefFrames" })
  maxRefFrames?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxVideoBitDepth" })
  maxVideoBitDepth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minSegments" })
  minSegments?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=params" })
  params?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=profile" })
  profile?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=requireAvc" })
  requireAvc?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=requireNonAnamorphic" })
  requireNonAnamorphic?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segmentContainer" })
  segmentContainer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=segmentLength" })
  segmentLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=static" })
  static?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=streamOptions" })
  streamOptions?: Map<string, string>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subtitleCodec" })
  subtitleCodec?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subtitleMethod" })
  subtitleMethod?: shared.SubtitleDeliveryMethodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcodeReasons" })
  transcodeReasons?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcodingMaxAudioChannels" })
  transcodingMaxAudioChannels?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoBitRate" })
  videoBitRate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoCodec" })
  videoCodec?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoStreamIndex" })
  videoStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetMasterHlsAudioPlaylistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetMasterHlsAudioPlaylistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMasterHlsAudioPlaylistPathParams;

  @Metadata()
  queryParams: GetMasterHlsAudioPlaylistQueryParams;

  @Metadata()
  security: GetMasterHlsAudioPlaylistSecurity;
}


export class GetMasterHlsAudioPlaylistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getMasterHlsAudioPlaylist200ApplicationXMpegurlBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
