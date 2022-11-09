import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostFilesV3FoldersCreateSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostFilesV3FoldersCreateSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FoldersCreateSecurity extends SpeakeasyBase {
    option1?: PostFilesV3FoldersCreateSecurityOption1;
    option2?: PostFilesV3FoldersCreateSecurityOption2;
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
