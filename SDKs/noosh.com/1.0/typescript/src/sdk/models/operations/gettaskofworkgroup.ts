import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTaskOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaskOfWorkgroupPathParams;
}


export class GetTaskOfWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskExpandWorkgroupLevelVo?: any;
}
