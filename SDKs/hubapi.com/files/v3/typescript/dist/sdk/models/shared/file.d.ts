import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileAccessEnum {
    PublicIndexable = "PUBLIC_INDEXABLE",
    PublicNotIndexable = "PUBLIC_NOT_INDEXABLE",
    HiddenIndexable = "HIDDEN_INDEXABLE",
    HiddenNotIndexable = "HIDDEN_NOT_INDEXABLE",
    HiddenPrivate = "HIDDEN_PRIVATE",
    Private = "PRIVATE"
}
/**
 * File
**/
export declare class File extends SpeakeasyBase {
    access: FileAccessEnum;
    archived: boolean;
    archivedAt?: Date;
    createdAt: Date;
    defaultHostingUrl?: string;
    encoding?: string;
    extension?: string;
    height?: number;
    id: string;
    isUsableInContent?: boolean;
    name?: string;
    parentFolderId?: string;
    path?: string;
    size?: number;
    type?: string;
    updatedAt: Date;
    url?: string;
    width?: number;
}
