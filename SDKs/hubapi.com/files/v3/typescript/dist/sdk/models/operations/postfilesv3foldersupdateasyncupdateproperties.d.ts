import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest extends SpeakeasyBase {
    request: shared.FolderUpdateInput;
    security: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity;
}
export declare class PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folderUpdateTaskLocator?: shared.FolderUpdateTaskLocator;
    statusCode: number;
}
