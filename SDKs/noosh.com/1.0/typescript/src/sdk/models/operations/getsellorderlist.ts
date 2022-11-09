import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSellOrderListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSellOrderListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSellOrderListPathParams;
}


export class GetSellOrderListResponse extends SpeakeasyBase {
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
