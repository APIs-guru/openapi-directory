import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayNextItemRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  nextItemRequestDto?: shared.NextItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  nextItemRequestDto1?: shared.NextItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  nextItemRequestDto2?: shared.NextItemRequestDto;
}


export class SyncPlayNextItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayNextItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayNextItemRequests;

  @SpeakeasyMetadata()
  security: SyncPlayNextItemSecurity;
}


export class SyncPlayNextItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
