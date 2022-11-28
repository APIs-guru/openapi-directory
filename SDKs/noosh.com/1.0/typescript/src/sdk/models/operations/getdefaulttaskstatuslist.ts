import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDefaultTaskStatusListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetDefaultTaskStatusListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDefaultTaskStatusListPathParams;
}


export class GetDefaultTaskStatusListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taskStatusListVo?: any;
}
