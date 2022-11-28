import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WorkflowStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE"
}


// Workflow
/** 
 * Workflow program to be executed by Workflows.
**/
export class Workflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionCreateTime" })
  revisionCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceContents" })
  sourceContents?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: WorkflowStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// WorkflowInput
/** 
 * Workflow program to be executed by Workflows.
**/
export class WorkflowInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceContents" })
  sourceContents?: string;
}
