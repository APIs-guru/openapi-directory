import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OnPlaybackProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class OnPlaybackProgressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isMuted" })
  isMuted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isPaused" })
  isPaused?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playMethod" })
  playMethod?: shared.PlayMethodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=positionTicks" })
  positionTicks?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repeatMode" })
  repeatMode?: shared.RepeatModeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=volumeLevel" })
  volumeLevel?: number;
}


export class OnPlaybackProgressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OnPlaybackProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OnPlaybackProgressPathParams;

  @Metadata()
  queryParams: OnPlaybackProgressQueryParams;

  @Metadata()
  security: OnPlaybackProgressSecurity;
}


export class OnPlaybackProgressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
