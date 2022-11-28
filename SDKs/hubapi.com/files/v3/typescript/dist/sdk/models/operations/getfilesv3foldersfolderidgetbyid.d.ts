import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilesV3FoldersFolderIdGetByIdPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class GetFilesV3FoldersFolderIdGetByIdQueryParams extends SpeakeasyBase {
    properties?: string[];
}
export declare class GetFilesV3FoldersFolderIdGetByIdSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersFolderIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetFilesV3FoldersFolderIdGetByIdPathParams;
    queryParams: GetFilesV3FoldersFolderIdGetByIdQueryParams;
    security: GetFilesV3FoldersFolderIdGetByIdSecurity;
}
export declare class GetFilesV3FoldersFolderIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
