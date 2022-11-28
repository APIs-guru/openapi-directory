import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrdersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderID" })
  orderId: string;
}


export class OrdersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OrdersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OrdersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrdersPathParams;

  @SpeakeasyMetadata()
  headers: OrdersHeaders;

  @SpeakeasyMetadata()
  security: OrdersSecurity;
}


export class OrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  orders200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
