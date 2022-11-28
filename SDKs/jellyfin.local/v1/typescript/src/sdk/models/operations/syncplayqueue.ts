import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayQueueRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  queueRequestDto?: shared.QueueRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  queueRequestDto1?: shared.QueueRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  queueRequestDto2?: shared.QueueRequestDto;
}


export class SyncPlayQueueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayQueueRequests;

  @SpeakeasyMetadata()
  security: SyncPlayQueueSecurity;
}


export class SyncPlayQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
