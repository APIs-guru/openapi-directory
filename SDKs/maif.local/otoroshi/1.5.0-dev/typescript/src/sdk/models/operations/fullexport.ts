import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FullExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FullExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: FullExportSecurity;
}


export class FullExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importExport?: shared.ImportExport;

  @SpeakeasyMetadata()
  statusCode: number;
}
