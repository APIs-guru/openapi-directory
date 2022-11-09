import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayNextItemRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  nextItemRequestDto?: shared.NextItemRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  nextItemRequestDto1?: shared.NextItemRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  nextItemRequestDto2?: shared.NextItemRequestDto;
}


export class SyncPlayNextItemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayNextItemRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayNextItemRequests;

  @Metadata()
  security: SyncPlayNextItemSecurity;
}


export class SyncPlayNextItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
