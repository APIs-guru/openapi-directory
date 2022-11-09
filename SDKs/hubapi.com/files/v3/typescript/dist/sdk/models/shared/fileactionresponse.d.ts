import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StandardError } from "./standarderror";
import { File } from "./file";
export declare enum FileActionResponseStatusEnum {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Canceled = "CANCELED",
    Complete = "COMPLETE"
}
export declare class FileActionResponse extends SpeakeasyBase {
    completedAt: Date;
    errors?: StandardError[];
    links?: Map<string, string>;
    numErrors?: number;
    requestedAt?: Date;
    result?: File;
    startedAt: Date;
    status: FileActionResponseStatusEnum;
    taskId: string;
}
