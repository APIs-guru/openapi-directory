import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FindAllDataExportersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindAllDataExportersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: FindAllDataExportersSecurity;
}


export class FindAllDataExportersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DataExporterConfig })
  dataExporterConfigs?: shared.DataExporterConfig[];

  @SpeakeasyMetadata()
  statusCode: number;
}
