import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPostedPlaybackInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetPostedPlaybackInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowAudioStreamCopy" })
  allowAudioStreamCopy?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowVideoStreamCopy" })
  allowVideoStreamCopy?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoOpenLiveStream" })
  autoOpenLiveStream?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectPlay" })
  enableDirectPlay?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableDirectStream" })
  enableDirectStream?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableTranscoding" })
  enableTranscoding?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAudioChannels" })
  maxAudioChannels?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxStreamingBitrate" })
  maxStreamingBitrate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startTimeTicks" })
  startTimeTicks?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetPostedPlaybackInfoRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  playbackInfoDto?: shared.PlaybackInfoDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  playbackInfoDto1?: shared.PlaybackInfoDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  playbackInfoDto2?: shared.PlaybackInfoDto;
}


export class GetPostedPlaybackInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPostedPlaybackInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPostedPlaybackInfoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPostedPlaybackInfoQueryParams;

  @SpeakeasyMetadata()
  request?: GetPostedPlaybackInfoRequests;

  @SpeakeasyMetadata()
  security: GetPostedPlaybackInfoSecurity;
}


export class GetPostedPlaybackInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playbackInfoResponse?: shared.PlaybackInfoResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
