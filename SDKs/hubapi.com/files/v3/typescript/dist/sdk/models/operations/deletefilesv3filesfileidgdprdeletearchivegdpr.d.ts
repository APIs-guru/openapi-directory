import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity extends SpeakeasyBase {
    option1?: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1;
    option2?: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest extends SpeakeasyBase {
    pathParams: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams;
    security: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
