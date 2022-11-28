import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaskListOfProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskListOfProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaskListOfProjectPathParams;
}


export class GetTaskListOfProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskListVo?: any;
}
