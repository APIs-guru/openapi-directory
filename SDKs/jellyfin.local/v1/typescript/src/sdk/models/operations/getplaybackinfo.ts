import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaybackInfoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetPlaybackInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId: string;
}


export class GetPlaybackInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPlaybackInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlaybackInfoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlaybackInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetPlaybackInfoSecurity;
}


export class GetPlaybackInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  playbackInfoResponse?: shared.PlaybackInfoResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
