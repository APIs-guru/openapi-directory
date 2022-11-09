import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetBuyOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBuyOrderPathParams;
}


export class GetBuyOrderResponse extends SpeakeasyBase {
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
