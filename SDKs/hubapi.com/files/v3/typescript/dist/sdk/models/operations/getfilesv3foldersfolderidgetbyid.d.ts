import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilesV3FoldersFolderIdGetByIdPathParams extends SpeakeasyBase {
    folderId: string;
}
export declare class GetFilesV3FoldersFolderIdGetByIdQueryParams extends SpeakeasyBase {
    properties?: string[];
}
export declare class GetFilesV3FoldersFolderIdGetByIdSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersFolderIdGetByIdSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FoldersFolderIdGetByIdSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersFolderIdGetByIdSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FoldersFolderIdGetByIdSecurityOption1;
    option2?: GetFilesV3FoldersFolderIdGetByIdSecurityOption2;
    option3?: GetFilesV3FoldersFolderIdGetByIdSecurityOption3;
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
