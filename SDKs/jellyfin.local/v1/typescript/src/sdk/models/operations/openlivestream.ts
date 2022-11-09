import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OpenLiveStreamQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableDirectPlay" })
  enableDirectPlay?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableDirectStream" })
  enableDirectStream?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=openToken" })
  openToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class OpenLiveStreamRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  openLiveStreamDto?: shared.OpenLiveStreamDto;

  @Metadata({ data: "request, media_type=application/json" })
  openLiveStreamDto1?: shared.OpenLiveStreamDto;

  @Metadata({ data: "request, media_type=text/json" })
  openLiveStreamDto2?: shared.OpenLiveStreamDto;
}


export class OpenLiveStreamSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OpenLiveStreamRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OpenLiveStreamQueryParams;

  @Metadata()
  request?: OpenLiveStreamRequests;

  @Metadata()
  security: OpenLiveStreamSecurity;
}


export class OpenLiveStreamResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  liveStreamResponse?: shared.LiveStreamResponse;

  @Metadata()
  statusCode: number;
}
