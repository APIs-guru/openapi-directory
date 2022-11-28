import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRfeListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetRfeListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRfeListPathParams;
}


export class GetRfeListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  rfeListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
