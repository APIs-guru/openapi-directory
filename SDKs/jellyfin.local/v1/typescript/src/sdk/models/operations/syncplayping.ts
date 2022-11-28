import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayPingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  pingRequestDto?: shared.PingRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  pingRequestDto1?: shared.PingRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  pingRequestDto2?: shared.PingRequestDto;
}


export class SyncPlayPingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayPingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayPingRequests;

  @SpeakeasyMetadata()
  security: SyncPlayPingSecurity;
}


export class SyncPlayPingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
