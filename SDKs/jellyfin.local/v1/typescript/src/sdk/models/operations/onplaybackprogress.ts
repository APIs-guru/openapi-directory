import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OnPlaybackProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class OnPlaybackProgressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isMuted" })
  isMuted?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPaused" })
  isPaused?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playMethod" })
  playMethod?: shared.PlayMethodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=positionTicks" })
  positionTicks?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repeatMode" })
  repeatMode?: shared.RepeatModeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=volumeLevel" })
  volumeLevel?: number;
}


export class OnPlaybackProgressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OnPlaybackProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OnPlaybackProgressPathParams;

  @SpeakeasyMetadata()
  queryParams: OnPlaybackProgressQueryParams;

  @SpeakeasyMetadata()
  security: OnPlaybackProgressSecurity;
}


export class OnPlaybackProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
