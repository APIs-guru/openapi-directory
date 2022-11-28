import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchDataExporterConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" })
  dataExporterConfigId: string;
}


export class PatchDataExporterConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchDataExporterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDataExporterConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchDataExporterConfigSecurity;
}


export class PatchDataExporterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
