import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilesV3FoldersFolderPathGetByPathPathParams extends SpeakeasyBase {
    folderPath: string;
}
export declare class GetFilesV3FoldersFolderPathGetByPathQueryParams extends SpeakeasyBase {
    properties?: string[];
}
export declare class GetFilesV3FoldersFolderPathGetByPathSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersFolderPathGetByPathSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FoldersFolderPathGetByPathSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersFolderPathGetByPathSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FoldersFolderPathGetByPathSecurityOption1;
    option2?: GetFilesV3FoldersFolderPathGetByPathSecurityOption2;
    option3?: GetFilesV3FoldersFolderPathGetByPathSecurityOption3;
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
