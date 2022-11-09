import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrdersOrderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class GetOrdersOrderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOrdersOrderIdPathParams;
}


export class GetOrdersOrderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOrder?: shared.GetOrder;

  @Metadata()
  statusCode: number;
}
