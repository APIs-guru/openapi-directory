import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDataExporterConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" })
  dataExporterConfigId: string;
}


export class UpdateDataExporterConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateDataExporterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDataExporterConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  security: UpdateDataExporterConfigSecurity;
}


export class UpdateDataExporterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
