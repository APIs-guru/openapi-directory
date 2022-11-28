import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaskOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaskOfWorkgroupPathParams;
}


export class GetTaskOfWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskExpandWorkgroupLevelVo?: any;
}
