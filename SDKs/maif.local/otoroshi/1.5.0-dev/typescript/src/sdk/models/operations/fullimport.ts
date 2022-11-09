import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FullImportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FullImportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ImportExport;

  @Metadata()
  security: FullImportSecurity;
}


export class FullImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  done?: shared.Done;

  @Metadata()
  statusCode: number;
}
