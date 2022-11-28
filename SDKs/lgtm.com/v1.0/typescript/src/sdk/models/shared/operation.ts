import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Analysis } from "./analysis";
import { CodeReview } from "./codereview";
import { Queryjob } from "./queryjob";
import { UploadSession } from "./uploadsession";


export enum OperationStatusEnum {
    Pending = "pending",
    Done = "done"
}

export enum OperationTaskTypeEnum {
    Analysis = "analysis",
    Codereview = "codereview",
    Queryjob = "queryjob"
}


export class Operation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=task-result" })
  taskResult?: any;

  @SpeakeasyMetadata({ data: "json, name=task-result-url" })
  taskResultUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=task-type" })
  taskType: OperationTaskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uploads", elemType: UploadSession })
  uploads?: Map<string, UploadSession>;
}
