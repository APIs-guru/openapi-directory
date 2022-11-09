import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayQueueRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  queueRequestDto?: shared.QueueRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  queueRequestDto1?: shared.QueueRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  queueRequestDto2?: shared.QueueRequestDto;
}


export class SyncPlayQueueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayQueueRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayQueueRequests;

  @Metadata()
  security: SyncPlayQueueSecurity;
}


export class SyncPlayQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
