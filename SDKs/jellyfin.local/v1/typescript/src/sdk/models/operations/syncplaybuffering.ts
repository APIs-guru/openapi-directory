import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayBufferingRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  bufferRequestDto?: shared.BufferRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  bufferRequestDto1?: shared.BufferRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  bufferRequestDto2?: shared.BufferRequestDto;
}


export class SyncPlayBufferingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayBufferingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayBufferingRequests;

  @SpeakeasyMetadata()
  security: SyncPlayBufferingSecurity;
}


export class SyncPlayBufferingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
