import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlaySetShuffleModeRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  setShuffleModeRequestDto?: shared.SetShuffleModeRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  setShuffleModeRequestDto1?: shared.SetShuffleModeRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  setShuffleModeRequestDto2?: shared.SetShuffleModeRequestDto;
}


export class SyncPlaySetShuffleModeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetShuffleModeRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlaySetShuffleModeRequests;

  @Metadata()
  security: SyncPlaySetShuffleModeSecurity;
}


export class SyncPlaySetShuffleModeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
