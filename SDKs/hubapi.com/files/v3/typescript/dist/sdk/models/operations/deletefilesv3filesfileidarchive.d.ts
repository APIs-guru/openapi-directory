import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteFilesV3FilesFileIdArchivePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DeleteFilesV3FilesFileIdArchiveSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class DeleteFilesV3FilesFileIdArchiveSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class DeleteFilesV3FilesFileIdArchiveSecurity extends SpeakeasyBase {
    option1?: DeleteFilesV3FilesFileIdArchiveSecurityOption1;
    option2?: DeleteFilesV3FilesFileIdArchiveSecurityOption2;
}
export declare class DeleteFilesV3FilesFileIdArchiveRequest extends SpeakeasyBase {
    pathParams: DeleteFilesV3FilesFileIdArchivePathParams;
    security: DeleteFilesV3FilesFileIdArchiveSecurity;
}
export declare class DeleteFilesV3FilesFileIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
