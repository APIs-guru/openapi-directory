import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchFilesV3FilesFileIdUpdatePropertiesPathParams extends SpeakeasyBase {
    fileId: string;
}
export declare class PatchFilesV3FilesFileIdUpdatePropertiesSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PatchFilesV3FilesFileIdUpdatePropertiesRequest extends SpeakeasyBase {
    pathParams: PatchFilesV3FilesFileIdUpdatePropertiesPathParams;
    request: shared.FileUpdateInput;
    security: PatchFilesV3FilesFileIdUpdatePropertiesSecurity;
}
export declare class PatchFilesV3FilesFileIdUpdatePropertiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    file?: shared.File;
    statusCode: number;
}
