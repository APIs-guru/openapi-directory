import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileUpdateInputAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}
/**
 * Object for updating files.
**/
export declare class FileUpdateInput extends SpeakeasyBase {
    access?: FileUpdateInputAccessEnum;
    isUsableInContent?: boolean;
    name?: string;
    parentFolderId?: string;
    parentFolderPath?: string;
}
