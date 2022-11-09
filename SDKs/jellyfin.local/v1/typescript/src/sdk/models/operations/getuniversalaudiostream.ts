import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUniversalAudioStreamPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetUniversalAudioStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=audioBitRate" })
  audioBitRate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audioCodec" })
  audioCodec?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=breakOnNonKeyFrames" })
  breakOnNonKeyFrames?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=container" })
  container?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableRedirection" })
  enableRedirection?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableRemoteMedia" })
  enableRemoteMedia?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAudioBitDepth" })
  maxAudioBitDepth?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAudioSampleRate" })
  maxAudioSampleRate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcodingAudioChannels" })
  transcodingAudioChannels?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcodingContainer" })
  transcodingContainer?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcodingProtocol" })
  transcodingProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetUniversalAudioStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetUniversalAudioStreamRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUniversalAudioStreamPathParams;

  @Metadata()
  queryParams: GetUniversalAudioStreamQueryParams;

  @Metadata()
  security: GetUniversalAudioStreamSecurity;
}


export class GetUniversalAudioStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUniversalAudioStream200AudioWildcardBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
