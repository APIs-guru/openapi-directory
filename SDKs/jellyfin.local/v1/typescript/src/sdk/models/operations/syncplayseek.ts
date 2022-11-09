import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlaySeekRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  seekRequestDto?: shared.SeekRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  seekRequestDto1?: shared.SeekRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  seekRequestDto2?: shared.SeekRequestDto;
}


export class SyncPlaySeekSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySeekRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlaySeekRequests;

  @Metadata()
  security: SyncPlaySeekSecurity;
}


export class SyncPlaySeekResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
