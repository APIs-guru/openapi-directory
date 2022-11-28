import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddTunerHostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  tunerHostInfo?: shared.TunerHostInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  tunerHostInfo1?: shared.TunerHostInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  tunerHostInfo2?: shared.TunerHostInfo;
}


export class AddTunerHostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddTunerHostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: AddTunerHostRequests;

  @SpeakeasyMetadata()
  security: AddTunerHostSecurity;
}


export class AddTunerHostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tunerHostInfo?: shared.TunerHostInfo;
}
