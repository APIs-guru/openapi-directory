import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OpenLiveStreamQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectPlay" })
  enableDirectPlay?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectStream" })
  enableDirectStream?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=openToken" })
  openToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class OpenLiveStreamRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  openLiveStreamDto?: shared.OpenLiveStreamDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  openLiveStreamDto1?: shared.OpenLiveStreamDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  openLiveStreamDto2?: shared.OpenLiveStreamDto;
}


export class OpenLiveStreamSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OpenLiveStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OpenLiveStreamQueryParams;

  @SpeakeasyMetadata()
  request?: OpenLiveStreamRequests;

  @SpeakeasyMetadata()
  security: OpenLiveStreamSecurity;
}


export class OpenLiveStreamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  liveStreamResponse?: shared.LiveStreamResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
