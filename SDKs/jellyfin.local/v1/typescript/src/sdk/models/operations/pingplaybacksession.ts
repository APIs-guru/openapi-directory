import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PingPlaybackSessionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;
}


export class PingPlaybackSessionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PingPlaybackSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PingPlaybackSessionQueryParams;

  @SpeakeasyMetadata()
  security: PingPlaybackSessionSecurity;
}


export class PingPlaybackSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
