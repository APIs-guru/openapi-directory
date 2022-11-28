import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilesV3FoldersFolderPathGetByPathPathParams extends SpeakeasyBase {
    folderPath: string;
}
export declare class GetFilesV3FoldersFolderPathGetByPathQueryParams extends SpeakeasyBase {
    properties?: string[];
}
export declare class GetFilesV3FoldersFolderPathGetByPathSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersFolderPathGetByPathRequest extends SpeakeasyBase {
    pathParams: GetFilesV3FoldersFolderPathGetByPathPathParams;
    queryParams: GetFilesV3FoldersFolderPathGetByPathQueryParams;
    security: GetFilesV3FoldersFolderPathGetByPathSecurity;
}
export declare class GetFilesV3FoldersFolderPathGetByPathResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
