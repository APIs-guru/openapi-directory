import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilesV3FilesFileIdGetByIdPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class GetFilesV3FilesFileIdGetByIdQueryParams extends SpeakeasyBase {
    properties?: string[];
}
export declare class GetFilesV3FilesFileIdGetByIdSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesFileIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetFilesV3FilesFileIdGetByIdPathParams;
    queryParams: GetFilesV3FilesFileIdGetByIdQueryParams;
    security: GetFilesV3FilesFileIdGetByIdSecurity;
}
export declare class GetFilesV3FilesFileIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
