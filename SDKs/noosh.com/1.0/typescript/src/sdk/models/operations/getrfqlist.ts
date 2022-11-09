import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRfqListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetRfqListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRfqListPathParams;
}


export class GetRfqListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  rfqListVo?: any;

  @Metadata()
  statusCode: number;
}
