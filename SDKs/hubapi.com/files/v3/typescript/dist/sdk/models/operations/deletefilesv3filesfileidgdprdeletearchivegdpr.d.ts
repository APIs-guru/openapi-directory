import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest extends SpeakeasyBase {
    pathParams: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams;
    security: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity;
}
export declare class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
