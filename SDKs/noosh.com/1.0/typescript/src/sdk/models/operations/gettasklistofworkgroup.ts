import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTaskListOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskListOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaskListOfWorkgroupPathParams;
}


export class GetTaskListOfWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskWorkgroupLevelListVo?: any;
}
