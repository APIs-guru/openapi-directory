import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRfqPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rfq_id" })
  rfqId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetRfqRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRfqPathParams;
}


export class GetRfqResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  rfqExpandVo?: any;

  @Metadata()
  statusCode: number;
}
