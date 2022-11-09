import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayPingRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  pingRequestDto?: shared.PingRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  pingRequestDto1?: shared.PingRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  pingRequestDto2?: shared.PingRequestDto;
}


export class SyncPlayPingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayPingRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayPingRequests;

  @Metadata()
  security: SyncPlayPingSecurity;
}


export class SyncPlayPingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
