import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDataExporterConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" })
  dataExporterConfigId: string;
}


export class UpdateDataExporterConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateDataExporterConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDataExporterConfigPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DataExporterConfig;

  @Metadata()
  security: UpdateDataExporterConfigSecurity;
}


export class UpdateDataExporterConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @Metadata()
  statusCode: number;
}
