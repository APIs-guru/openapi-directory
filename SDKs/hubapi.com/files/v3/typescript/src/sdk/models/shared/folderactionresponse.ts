import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardError } from "./standarderror";
import { Folder } from "./folder";

export enum FolderActionResponseStatusEnum {
    Pending = "PENDING"
,    Processing = "PROCESSING"
,    Canceled = "CANCELED"
,    Complete = "COMPLETE"
}


export class FolderActionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=completedAt" })
  completedAt: Date;

  @Metadata({ data: "json, name=errors", elemType: shared.StandardError })
  errors?: StandardError[];

  @Metadata({ data: "json, name=links" })
  links?: Map<string, string>;

  @Metadata({ data: "json, name=numErrors" })
  numErrors?: number;

  @Metadata({ data: "json, name=requestedAt" })
  requestedAt?: Date;

  @Metadata({ data: "json, name=result" })
  result?: Folder;

  @Metadata({ data: "json, name=startedAt" })
  startedAt: Date;

  @Metadata({ data: "json, name=status" })
  status: FolderActionResponseStatusEnum;

  @Metadata({ data: "json, name=taskId" })
  taskId: string;
}
