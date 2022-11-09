import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurity extends SpeakeasyBase {
    option1?: PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption1;
    option2?: PostFilesV3FilesImportFromUrlAsyncImportFromUrlSecurityOption2;
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
