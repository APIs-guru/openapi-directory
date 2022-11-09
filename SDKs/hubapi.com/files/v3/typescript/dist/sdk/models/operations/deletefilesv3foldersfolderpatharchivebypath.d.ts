import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathPathParams extends SpeakeasyBase {
    folderPath: string;
}
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathSecurity extends SpeakeasyBase {
    option1?: DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1;
    option2?: DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2;
}
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathRequest extends SpeakeasyBase {
    pathParams: DeleteFilesV3FoldersFolderPathArchiveByPathPathParams;
    security: DeleteFilesV3FoldersFolderPathArchiveByPathSecurity;
}
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
