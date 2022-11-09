import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindAllDataExportersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllDataExportersRequest extends SpeakeasyBase {
  @Metadata()
  security: FindAllDataExportersSecurity;
}


export class FindAllDataExportersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DataExporterConfig })
  dataExporterConfigs?: shared.DataExporterConfig[];

  @Metadata()
  statusCode: number;
}
