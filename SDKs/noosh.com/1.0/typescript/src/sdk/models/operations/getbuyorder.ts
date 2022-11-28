import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBuyOrderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=order_id" })
  orderId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetBuyOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBuyOrderPathParams;
}


export class GetBuyOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  orderDetailVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
