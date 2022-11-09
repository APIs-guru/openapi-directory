import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddTunerHostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  tunerHostInfo?: shared.TunerHostInfo;

  @Metadata({ data: "request, media_type=application/json" })
  tunerHostInfo1?: shared.TunerHostInfo;

  @Metadata({ data: "request, media_type=text/json" })
  tunerHostInfo2?: shared.TunerHostInfo;
}


export class AddTunerHostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddTunerHostRequest extends SpeakeasyBase {
  @Metadata()
  request?: AddTunerHostRequests;

  @Metadata()
  security: AddTunerHostSecurity;
}


export class AddTunerHostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tunerHostInfo?: shared.TunerHostInfo;
}
