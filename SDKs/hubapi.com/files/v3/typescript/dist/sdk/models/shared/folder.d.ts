import { SpeakeasyBase } from "../../../internal/utils";
export declare class Folder extends SpeakeasyBase {
    archived: boolean;
    archivedAt?: Date;
    createdAt: Date;
    id: string;
    name?: string;
    parentFolderId?: string;
    path?: string;
    updatedAt: Date;
}
