import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDefaultTaskStatusListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetDefaultTaskStatusListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDefaultTaskStatusListPathParams;
}


export class GetDefaultTaskStatusListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  taskStatusListVo?: any;
}
