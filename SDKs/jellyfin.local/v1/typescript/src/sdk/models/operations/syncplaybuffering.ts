import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayBufferingRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  bufferRequestDto?: shared.BufferRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  bufferRequestDto1?: shared.BufferRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  bufferRequestDto2?: shared.BufferRequestDto;
}


export class SyncPlayBufferingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayBufferingRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayBufferingRequests;

  @Metadata()
  security: SyncPlayBufferingSecurity;
}


export class SyncPlayBufferingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
