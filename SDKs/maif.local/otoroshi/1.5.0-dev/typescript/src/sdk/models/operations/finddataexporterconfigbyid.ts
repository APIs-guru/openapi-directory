import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindDataExporterConfigByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataExporterConfigId" })
  dataExporterConfigId: string;
}


export class FindDataExporterConfigByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindDataExporterConfigByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindDataExporterConfigByIdPathParams;

  @SpeakeasyMetadata()
  security: FindDataExporterConfigByIdSecurity;
}


export class FindDataExporterConfigByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataExporterConfig?: shared.DataExporterConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
