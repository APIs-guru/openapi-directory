import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderPathParams;
}


export class GetOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  orderDetailWithIndicatorVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
