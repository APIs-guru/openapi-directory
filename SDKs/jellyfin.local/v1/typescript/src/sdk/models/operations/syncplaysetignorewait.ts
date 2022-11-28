import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlaySetIgnoreWaitRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  ignoreWaitRequestDto?: shared.IgnoreWaitRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  ignoreWaitRequestDto1?: shared.IgnoreWaitRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  ignoreWaitRequestDto2?: shared.IgnoreWaitRequestDto;
}


export class SyncPlaySetIgnoreWaitSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetIgnoreWaitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlaySetIgnoreWaitRequests;

  @SpeakeasyMetadata()
  security: SyncPlaySetIgnoreWaitSecurity;
}


export class SyncPlaySetIgnoreWaitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
