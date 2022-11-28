import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FilesImportFromUrlAsyncImportFromUrlRequest extends SpeakeasyBase {
    request: shared.ImportFromUrlInput;
    security: PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity;
}
export declare class PostFilesV3FilesImportFromUrlAsyncImportFromUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    importFromUrlTaskLocator?: shared.ImportFromUrlTaskLocator;
    statusCode: number;
}
