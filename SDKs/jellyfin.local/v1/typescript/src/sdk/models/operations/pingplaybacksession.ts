import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PingPlaybackSessionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=playSessionId" })
  playSessionId?: string;
}


export class PingPlaybackSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class PingPlaybackSessionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PingPlaybackSessionQueryParams;

  @Metadata()
  security: PingPlaybackSessionSecurity;
}


export class PingPlaybackSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
