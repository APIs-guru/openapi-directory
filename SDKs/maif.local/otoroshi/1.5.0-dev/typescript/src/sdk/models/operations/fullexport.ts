import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FullExportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FullExportRequest extends SpeakeasyBase {
  @Metadata()
  security: FullExportSecurity;
}


export class FullExportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importExport?: shared.ImportExport;

  @Metadata()
  statusCode: number;
}
