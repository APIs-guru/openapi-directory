import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskPriorityListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class TaskPriorityListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TaskPriorityListPathParams;
}


export class TaskPriorityListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskPriorityListVo?: any;
}
