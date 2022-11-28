import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDataExporterConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" })
  dataExporterConfigId: string;
}


export class DeleteDataExporterConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteDataExporterConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDataExporterConfigPathParams;

  @SpeakeasyMetadata()
  security: DeleteDataExporterConfigSecurity;
}


export class DeleteDataExporterConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleted?: shared.Deleted;

  @SpeakeasyMetadata()
  statusCode: number;
}
