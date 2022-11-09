import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2;
}


export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ImportFromUrlInput;

  @Metadata()
  security: PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity;
}


export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  importFromUrlTaskLocator?: shared.ImportFromUrlTaskLocator;

  @Metadata()
  statusCode: number;
}
