import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayPreviousItemRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  previousItemRequestDto?: shared.PreviousItemRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  previousItemRequestDto1?: shared.PreviousItemRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  previousItemRequestDto2?: shared.PreviousItemRequestDto;
}


export class SyncPlayPreviousItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayPreviousItemRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayPreviousItemRequests;

  @Metadata()
  security: SyncPlayPreviousItemSecurity;
}


export class SyncPlayPreviousItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
