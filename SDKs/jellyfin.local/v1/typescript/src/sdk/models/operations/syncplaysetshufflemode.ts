import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlaySetShuffleModeRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  setShuffleModeRequestDto?: shared.SetShuffleModeRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  setShuffleModeRequestDto1?: shared.SetShuffleModeRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  setShuffleModeRequestDto2?: shared.SetShuffleModeRequestDto;
}


export class SyncPlaySetShuffleModeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetShuffleModeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlaySetShuffleModeRequests;

  @SpeakeasyMetadata()
  security: SyncPlaySetShuffleModeSecurity;
}


export class SyncPlaySetShuffleModeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
