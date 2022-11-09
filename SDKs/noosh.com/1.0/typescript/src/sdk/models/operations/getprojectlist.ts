import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProjectListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetProjectListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectListPathParams;
}


export class GetProjectListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  projectListVo?: any;

  @Metadata()
  statusCode: number;
}
