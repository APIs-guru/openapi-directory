import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetOrderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrderPathParams;
}


export class GetOrderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  orderDetailWithIndicatorVo?: any;

  @Metadata()
  statusCode: number;
}
