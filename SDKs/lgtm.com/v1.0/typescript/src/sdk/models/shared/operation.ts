import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Analysis } from "./analysis";
import { CodeReview } from "./codereview";
import { Queryjob } from "./queryjob";
import { UploadSession } from "./uploadsession";

export enum OperationStatusEnum {
    Pending = "pending"
,    Done = "done"
}

export enum OperationTaskTypeEnum {
    Analysis = "analysis"
,    Codereview = "codereview"
,    Queryjob = "queryjob"
}


export class Operation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=status" })
  status?: OperationStatusEnum;

  @Metadata({ data: "json, name=task-result" })
  taskResult?: any;

  @Metadata({ data: "json, name=task-result-url" })
  taskResultUrl?: string;

  @Metadata({ data: "json, name=task-type" })
  taskType: OperationTaskTypeEnum;

  @Metadata({ data: "json, name=uploads", elemType: shared.UploadSession })
  uploads?: Map<string, UploadSession>;
}
