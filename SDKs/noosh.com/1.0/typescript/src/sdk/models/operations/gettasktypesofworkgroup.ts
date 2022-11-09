import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTaskTypesOfWorkgroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetTaskTypesOfWorkgroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaskTypesOfWorkgroupPathParams;
}


export class GetTaskTypesOfWorkgroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskTypeListVo?: any;
}
