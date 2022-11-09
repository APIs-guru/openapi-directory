import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayReadyRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  readyRequestDto?: shared.ReadyRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  readyRequestDto1?: shared.ReadyRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  readyRequestDto2?: shared.ReadyRequestDto;
}


export class SyncPlayReadySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayReadyRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayReadyRequests;

  @Metadata()
  security: SyncPlayReadySecurity;
}


export class SyncPlayReadyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
