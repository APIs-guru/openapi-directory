import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDataExporterConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateDataExporterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  security: CreateDataExporterConfigSecurity;
}


export class CreateDataExporterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
