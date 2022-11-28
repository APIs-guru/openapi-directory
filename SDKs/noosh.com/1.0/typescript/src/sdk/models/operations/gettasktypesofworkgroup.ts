import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaskTypesOfWorkgroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskTypesOfWorkgroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaskTypesOfWorkgroupPathParams;
}


export class GetTaskTypesOfWorkgroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskTypeListVo?: any;
}
