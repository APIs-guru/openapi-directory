import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OnPlaybackStoppedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class OnPlaybackStoppedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=liveStreamId" })
  liveStreamId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mediaSourceId" })
  mediaSourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextMediaType" })
  nextMediaType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=positionTicks" })
  positionTicks?: number;
}


export class OnPlaybackStoppedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class OnPlaybackStoppedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OnPlaybackStoppedPathParams;

  @Metadata()
  queryParams: OnPlaybackStoppedQueryParams;

  @Metadata()
  security: OnPlaybackStoppedSecurity;
}


export class OnPlaybackStoppedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
