import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPostedPlaybackInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetPostedPlaybackInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allowAudioStreamCopy" })
  allowAudioStreamCopy?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allowVideoStreamCopy" })
  allowVideoStreamCopy?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=autoOpenLiveStream" })
  autoOpenLiveStream?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableDirectPlay" })
  enableDirectPlay?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableDirectStream" })
  enableDirectStream?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enableTranscoding" })
  enableTranscoding?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetPostedPlaybackInfoRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  playbackInfoDto?: shared.PlaybackInfoDto;

  @Metadata({ data: "request, media_type=application/json" })
  playbackInfoDto1?: shared.PlaybackInfoDto;

  @Metadata({ data: "request, media_type=text/json" })
  playbackInfoDto2?: shared.PlaybackInfoDto;
}


export class GetPostedPlaybackInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPostedPlaybackInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPostedPlaybackInfoPathParams;

  @Metadata()
  queryParams: GetPostedPlaybackInfoQueryParams;

  @Metadata()
  request?: GetPostedPlaybackInfoRequests;

  @Metadata()
  security: GetPostedPlaybackInfoSecurity;
}


export class GetPostedPlaybackInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playbackInfoResponse?: shared.PlaybackInfoResponse;

  @Metadata()
  statusCode: number;
}
