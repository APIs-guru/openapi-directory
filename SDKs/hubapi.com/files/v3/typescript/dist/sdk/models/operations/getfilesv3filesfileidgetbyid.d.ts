import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilesV3FilesFileIdGetByIdPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class GetFilesV3FilesFileIdGetByIdQueryParams extends SpeakeasyBase {
    properties?: string[];
}
export declare class GetFilesV3FilesFileIdGetByIdSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesFileIdGetByIdSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FilesFileIdGetByIdSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesFileIdGetByIdSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FilesFileIdGetByIdSecurityOption1;
    option2?: GetFilesV3FilesFileIdGetByIdSecurityOption2;
    option3?: GetFilesV3FilesFileIdGetByIdSecurityOption3;
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
