import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HeadAudioStreamByContainerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=container" })
  container: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class HeadAudioStreamByContainerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAudioStreamCopy" })
  allowAudioStreamCopy?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowVideoStreamCopy" })
  allowVideoStreamCopy?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioBitRate" })
  audioBitRate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioChannels" })
  audioChannels?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioCodec" })
  audioCodec?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioSampleRate" })
  audioSampleRate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=breakOnNonKeyFrames" })
  breakOnNonKeyFrames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=context" })
  context?: shared.EncodingContextEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=copyTimestamps" })
  copyTimestamps?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cpuCoreLimit" })
  cpuCoreLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deInterlace" })
  deInterlace?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceProfileId" })
  deviceProfileId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableAutoStreamCopy" })
  enableAutoStreamCopy?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableMpegtsM2TsMode" })
  enableMpegtsM2TsMode?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=framerate" })
  framerate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioBitDepth" })
  maxAudioBitDepth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxFramerate" })
  maxFramerate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxRefFrames" })
  maxRefFrames?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxVideoBitDepth" })
  maxVideoBitDepth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minSegments" })
  minSegments?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=params" })
  params?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile" })
  profile?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireAvc" })
  requireAvc?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requireNonAnamorphic" })
  requireNonAnamorphic?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentContainer" })
  segmentContainer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=segmentLength" })
  segmentLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=static" })
  static?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=streamOptions" })
  streamOptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleCodec" })
  subtitleCodec?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleMethod" })
  subtitleMethod?: shared.SubtitleDeliveryMethodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodeReasons" })
  transcodeReasons?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingMaxAudioChannels" })
  transcodingMaxAudioChannels?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoBitRate" })
  videoBitRate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoCodec" })
  videoCodec?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoStreamIndex" })
  videoStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class HeadAudioStreamByContainerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HeadAudioStreamByContainerPathParams;

  @SpeakeasyMetadata()
  queryParams: HeadAudioStreamByContainerQueryParams;
}


export class HeadAudioStreamByContainerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headAudioStreamByContainer200AudioWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
