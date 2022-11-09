import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProjectCategoryListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectCategoryListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectCategoryListPathParams;
}


export class GetProjectCategoryListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  projectCategoryListVo?: any;

  @Metadata()
  statusCode: number;
}
