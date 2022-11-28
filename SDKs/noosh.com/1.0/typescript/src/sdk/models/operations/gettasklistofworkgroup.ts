import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaskListOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskListOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaskListOfWorkgroupPathParams;
}


export class GetTaskListOfWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskWorkgroupLevelListVo?: any;
}
