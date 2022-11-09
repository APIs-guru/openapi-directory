import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostFilesV3FilesUploadSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostFilesV3FilesUploadSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FilesUploadSecurity extends SpeakeasyBase {
    option1?: PostFilesV3FilesUploadSecurityOption1;
    option2?: PostFilesV3FilesUploadSecurityOption2;
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
