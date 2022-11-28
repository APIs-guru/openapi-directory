import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathPathParams extends SpeakeasyBase {
    folderPath: string;
}
export declare class DeleteFilesV3FoldersFolderPathArchiveByPathSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
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
