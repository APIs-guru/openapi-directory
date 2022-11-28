import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Object for updating folders.
**/
export declare class FolderUpdateInput extends SpeakeasyBase {
    id: string;
    name?: string;
    parentFolderId?: number;
}
