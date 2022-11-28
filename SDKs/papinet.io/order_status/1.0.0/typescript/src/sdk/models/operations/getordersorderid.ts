import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrdersOrderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetOrdersOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrdersOrderIdPathParams;
}


export class GetOrdersOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getOrder?: shared.GetOrder;

  @SpeakeasyMetadata()
  statusCode: number;
}
