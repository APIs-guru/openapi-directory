import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlaySetIgnoreWaitRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  ignoreWaitRequestDto?: shared.IgnoreWaitRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  ignoreWaitRequestDto1?: shared.IgnoreWaitRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  ignoreWaitRequestDto2?: shared.IgnoreWaitRequestDto;
}


export class SyncPlaySetIgnoreWaitSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlaySetIgnoreWaitRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlaySetIgnoreWaitRequests;

  @Metadata()
  security: SyncPlaySetIgnoreWaitSecurity;
}


export class SyncPlaySetIgnoreWaitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
