import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectListPathParams;
}


export class GetProjectListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  projectListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
