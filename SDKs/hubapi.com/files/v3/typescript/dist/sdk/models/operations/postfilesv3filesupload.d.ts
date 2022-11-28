import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFilesV3FilesUploadSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FilesUploadRequest extends SpeakeasyBase {
    request?: any;
    security: PostFilesV3FilesUploadSecurity;
}
export declare class PostFilesV3FilesUploadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
