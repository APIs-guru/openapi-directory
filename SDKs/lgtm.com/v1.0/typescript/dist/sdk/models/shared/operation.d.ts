import { SpeakeasyBase } from "../../../internal/utils";
import { UploadSession } from "./uploadsession";
export declare enum OperationStatusEnum {
    Pending = "pending",
    Done = "done"
}
export declare enum OperationTaskTypeEnum {
    Analysis = "analysis",
    Codereview = "codereview",
    Queryjob = "queryjob"
}
export declare class Operation extends SpeakeasyBase {
    id?: number;
    status?: OperationStatusEnum;
    taskResult?: any;
    taskResultUrl?: string;
    taskType: OperationTaskTypeEnum;
    uploads?: Map<string, UploadSession>;
}
