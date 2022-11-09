import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WorkflowStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
}


// Workflow
/** 
 * Workflow program to be executed by Workflows.
**/
export class Workflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=sourceContents" })
  sourceContents?: string;

  @Metadata({ data: "json, name=state" })
  state?: WorkflowStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
