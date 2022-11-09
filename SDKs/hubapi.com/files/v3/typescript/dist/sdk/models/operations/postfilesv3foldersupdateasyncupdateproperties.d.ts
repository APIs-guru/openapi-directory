import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity extends SpeakeasyBase {
    option1?: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1;
    option2?: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2;
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
