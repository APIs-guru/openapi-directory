import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FullImportFromFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FullImportFromFileRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ImportExport;

  @Metadata()
  security: FullImportFromFileSecurity;
}


export class FullImportFromFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  done?: shared.Done;

  @Metadata()
  statusCode: number;
}
