import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayReadyRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  readyRequestDto?: shared.ReadyRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  readyRequestDto1?: shared.ReadyRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  readyRequestDto2?: shared.ReadyRequestDto;
}


export class SyncPlayReadySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayReadyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayReadyRequests;

  @SpeakeasyMetadata()
  security: SyncPlayReadySecurity;
}


export class SyncPlayReadyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
