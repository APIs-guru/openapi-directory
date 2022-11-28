import { SpeakeasyBase } from "../../../internal/utils";
import { StandardError } from "./standarderror";
import { Folder } from "./folder";
export declare enum FolderActionResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
export declare class FolderActionResponse extends SpeakeasyBase {
    completedAt: Date;
    errors?: StandardError[];
    links?: Map<string, string>;
    numErrors?: number;
    requestedAt?: Date;
    result?: Folder;
    startedAt: Date;
    status: FolderActionResponseStatusEnum;
    taskId: string;
}
