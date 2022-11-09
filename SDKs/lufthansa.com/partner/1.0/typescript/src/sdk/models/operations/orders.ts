import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrdersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderID" })
  orderId: string;
}


export class OrdersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OrdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OrdersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrdersPathParams;

  @Metadata()
  headers: OrdersHeaders;

  @Metadata()
  security: OrdersSecurity;
}


export class OrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orders200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
