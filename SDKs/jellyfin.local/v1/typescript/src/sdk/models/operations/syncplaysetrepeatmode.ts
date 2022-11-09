import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlaySetRepeatModeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  setRepeatModeRequestDto?: shared.SetRepeatModeRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  setRepeatModeRequestDto1?: shared.SetRepeatModeRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  setRepeatModeRequestDto2?: shared.SetRepeatModeRequestDto;
}


export class SyncPlaySetRepeatModeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetRepeatModeRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlaySetRepeatModeRequests;

  @Metadata()
  security: SyncPlaySetRepeatModeSecurity;
}


export class SyncPlaySetRepeatModeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
