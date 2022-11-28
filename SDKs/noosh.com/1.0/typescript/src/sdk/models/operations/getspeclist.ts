import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSpecListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpecListPathParams;
}


export class GetSpecListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  specListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
