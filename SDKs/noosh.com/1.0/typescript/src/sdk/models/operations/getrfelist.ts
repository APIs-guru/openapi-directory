import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRfeListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetRfeListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRfeListPathParams;
}


export class GetRfeListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  rfeListVo?: any;

  @Metadata()
  statusCode: number;
}
