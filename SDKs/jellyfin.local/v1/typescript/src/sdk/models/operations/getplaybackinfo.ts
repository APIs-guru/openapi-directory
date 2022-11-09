import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlaybackInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetPlaybackInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class GetPlaybackInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPlaybackInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlaybackInfoPathParams;

  @Metadata()
  queryParams: GetPlaybackInfoQueryParams;

  @Metadata()
  security: GetPlaybackInfoSecurity;
}


export class GetPlaybackInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  playbackInfoResponse?: shared.PlaybackInfoResponse;

  @Metadata()
  statusCode: number;
}
