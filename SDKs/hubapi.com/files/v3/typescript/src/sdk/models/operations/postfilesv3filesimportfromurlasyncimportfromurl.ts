import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ImportFromUrlInput;

  @SpeakeasyMetadata()
  security: PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity;
}


export class PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importFromUrlTaskLocator?: shared.ImportFromUrlTaskLocator;

  @SpeakeasyMetadata()
  statusCode: number;
}
