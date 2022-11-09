import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTaskOfProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskOfProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaskOfProjectPathParams;
}


export class GetTaskOfProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskExpandVo?: any;
}
