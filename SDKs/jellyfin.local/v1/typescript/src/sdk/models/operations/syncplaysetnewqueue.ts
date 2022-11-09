import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlaySetNewQueueRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  playRequestDto?: shared.PlayRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  playRequestDto1?: shared.PlayRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  playRequestDto2?: shared.PlayRequestDto;
}


export class SyncPlaySetNewQueueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetNewQueueRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlaySetNewQueueRequests;

  @Metadata()
  security: SyncPlaySetNewQueueSecurity;
}


export class SyncPlaySetNewQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
