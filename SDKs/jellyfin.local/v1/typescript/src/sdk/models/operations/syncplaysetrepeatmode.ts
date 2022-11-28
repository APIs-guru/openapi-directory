import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlaySetRepeatModeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  setRepeatModeRequestDto?: shared.SetRepeatModeRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  setRepeatModeRequestDto1?: shared.SetRepeatModeRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  setRepeatModeRequestDto2?: shared.SetRepeatModeRequestDto;
}


export class SyncPlaySetRepeatModeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetRepeatModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlaySetRepeatModeRequests;

  @SpeakeasyMetadata()
  security: SyncPlaySetRepeatModeSecurity;
}


export class SyncPlaySetRepeatModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
