import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFilesV3FoldersCreateSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FoldersCreateRequest extends SpeakeasyBase {
    request: shared.FolderInput;
    security: PostFilesV3FoldersCreateSecurity;
}
export declare class PostFilesV3FoldersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
