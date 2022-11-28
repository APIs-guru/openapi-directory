import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayPreviousItemRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  previousItemRequestDto?: shared.PreviousItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  previousItemRequestDto1?: shared.PreviousItemRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  previousItemRequestDto2?: shared.PreviousItemRequestDto;
}


export class SyncPlayPreviousItemSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayPreviousItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayPreviousItemRequests;

  @SpeakeasyMetadata()
  security: SyncPlayPreviousItemSecurity;
}


export class SyncPlayPreviousItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
