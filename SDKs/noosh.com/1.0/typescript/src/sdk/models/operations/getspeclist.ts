import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpecListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSpecListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpecListPathParams;
}


export class GetSpecListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  specListVo?: any;

  @Metadata()
  statusCode: number;
}
