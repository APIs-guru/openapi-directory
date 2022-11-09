import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutFilesV3FilesFileIdReplacePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class PutFilesV3FilesFileIdReplaceSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PutFilesV3FilesFileIdReplaceSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PutFilesV3FilesFileIdReplaceSecurity extends SpeakeasyBase {
    option1?: PutFilesV3FilesFileIdReplaceSecurityOption1;
    option2?: PutFilesV3FilesFileIdReplaceSecurityOption2;
}
export declare class PutFilesV3FilesFileIdReplaceRequest extends SpeakeasyBase {
    pathParams: PutFilesV3FilesFileIdReplacePathParams;
    request?: any;
    security: PutFilesV3FilesFileIdReplaceSecurity;
}
export declare class PutFilesV3FilesFileIdReplaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
