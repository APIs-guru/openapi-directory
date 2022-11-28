import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProjectCategoryListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectCategoryListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectCategoryListPathParams;
}


export class GetProjectCategoryListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  projectCategoryListVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
