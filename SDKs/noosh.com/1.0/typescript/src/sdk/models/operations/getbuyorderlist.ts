import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBuyOrderListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuyOrderListPathParams;
}


export class GetBuyOrderListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  orderListVo?: any;

  @Metadata()
  statusCode: number;
}
