import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OnPlaybackStoppedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class OnPlaybackStoppedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextMediaType" })
  nextMediaType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=positionTicks" })
  positionTicks?: number;
}


export class OnPlaybackStoppedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OnPlaybackStoppedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OnPlaybackStoppedPathParams;

  @SpeakeasyMetadata()
  queryParams: OnPlaybackStoppedQueryParams;

  @SpeakeasyMetadata()
  security: OnPlaybackStoppedSecurity;
}


export class OnPlaybackStoppedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
