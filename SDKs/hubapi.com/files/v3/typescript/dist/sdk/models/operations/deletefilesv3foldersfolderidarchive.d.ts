import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteFilesV3FoldersFolderIdArchivePathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class DeleteFilesV3FoldersFolderIdArchiveSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class DeleteFilesV3FoldersFolderIdArchiveSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class DeleteFilesV3FoldersFolderIdArchiveSecurity extends SpeakeasyBase {
    option1?: DeleteFilesV3FoldersFolderIdArchiveSecurityOption1;
    option2?: DeleteFilesV3FoldersFolderIdArchiveSecurityOption2;
}
export declare class DeleteFilesV3FoldersFolderIdArchiveRequest extends SpeakeasyBase {
    pathParams: DeleteFilesV3FoldersFolderIdArchivePathParams;
    security: DeleteFilesV3FoldersFolderIdArchiveSecurity;
}
export declare class DeleteFilesV3FoldersFolderIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
