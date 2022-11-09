import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OnPlaybackStartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class OnPlaybackStartQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=canSeek" })
  canSeek?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playMethod" })
  playMethod?: shared.PlayMethodEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;
}


export class OnPlaybackStartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OnPlaybackStartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OnPlaybackStartPathParams;

  @Metadata()
  queryParams: OnPlaybackStartQueryParams;

  @Metadata()
  security: OnPlaybackStartSecurity;
}


export class OnPlaybackStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
