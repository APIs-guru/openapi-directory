import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlaySetNewQueueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  playRequestDto?: shared.PlayRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  playRequestDto1?: shared.PlayRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  playRequestDto2?: shared.PlayRequestDto;
}


export class SyncPlaySetNewQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetNewQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlaySetNewQueueRequests;

  @SpeakeasyMetadata()
  security: SyncPlaySetNewQueueSecurity;
}


export class SyncPlaySetNewQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
