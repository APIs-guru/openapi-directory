import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTaskListOfProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskListOfProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaskListOfProjectPathParams;
}


export class GetTaskListOfProjectResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskListVo?: any;
}
