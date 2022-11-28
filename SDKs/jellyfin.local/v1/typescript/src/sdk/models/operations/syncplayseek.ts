import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlaySeekRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  seekRequestDto?: shared.SeekRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  seekRequestDto1?: shared.SeekRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  seekRequestDto2?: shared.SeekRequestDto;
}


export class SyncPlaySeekSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlaySeekRequests;

  @SpeakeasyMetadata()
  security: SyncPlaySeekSecurity;
}


export class SyncPlaySeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
