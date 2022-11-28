import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutFilesV3FilesFileIdReplacePathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class PutFilesV3FilesFileIdReplaceSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
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
