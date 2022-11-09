import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDataExporterConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" })
  dataExporterConfigId: string;
}


export class DeleteDataExporterConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteDataExporterConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDataExporterConfigPathParams;

  @Metadata()
  security: DeleteDataExporterConfigSecurity;
}


export class DeleteDataExporterConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleted?: shared.Deleted;

  @Metadata()
  statusCode: number;
}
