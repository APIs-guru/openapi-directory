import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HeadUniversalAudioStreamPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class HeadUniversalAudioStreamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioBitRate" })
  audioBitRate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioCodec" })
  audioCodec?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=breakOnNonKeyFrames" })
  breakOnNonKeyFrames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=container" })
  container?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableRedirection" })
  enableRedirection?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableRemoteMedia" })
  enableRemoteMedia?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioBitDepth" })
  maxAudioBitDepth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioSampleRate" })
  maxAudioSampleRate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingAudioChannels" })
  transcodingAudioChannels?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingContainer" })
  transcodingContainer?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcodingProtocol" })
  transcodingProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class HeadUniversalAudioStreamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class HeadUniversalAudioStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HeadUniversalAudioStreamPathParams;

  @SpeakeasyMetadata()
  queryParams: HeadUniversalAudioStreamQueryParams;

  @SpeakeasyMetadata()
  security: HeadUniversalAudioStreamSecurity;
}


export class HeadUniversalAudioStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headUniversalAudioStream200AudioWildcardBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
