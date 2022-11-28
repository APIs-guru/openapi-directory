import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OnPlaybackStartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class OnPlaybackStartQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=audioStreamIndex" })
  audioStreamIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canSeek" })
  canSeek?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playMethod" })
  playMethod?: shared.PlayMethodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subtitleStreamIndex" })
  subtitleStreamIndex?: number;
}


export class OnPlaybackStartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OnPlaybackStartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OnPlaybackStartPathParams;

  @SpeakeasyMetadata()
  queryParams: OnPlaybackStartQueryParams;

  @SpeakeasyMetadata()
  security: OnPlaybackStartSecurity;
}


export class OnPlaybackStartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
