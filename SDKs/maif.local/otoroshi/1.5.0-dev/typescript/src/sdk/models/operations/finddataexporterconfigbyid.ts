import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindDataExporterConfigByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" })
  dataExporterConfigId: string;
}


export class FindDataExporterConfigByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindDataExporterConfigByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindDataExporterConfigByIdPathParams;

  @Metadata()
  security: FindDataExporterConfigByIdSecurity;
}


export class FindDataExporterConfigByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @Metadata()
  statusCode: number;
}
