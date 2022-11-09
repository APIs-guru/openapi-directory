import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSellOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetSellOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSellOrderPathParams;
}


export class GetSellOrderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  orderDetailVo?: any;

  @Metadata()
  statusCode: number;
}
