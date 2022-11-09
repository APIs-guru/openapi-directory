import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountOrdersCustomerOrderIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=CustomerOrderId" })
  customerOrderId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class GetAccountsAccountOrdersCustomerOrderIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountOrdersCustomerOrderIdPathParams;
}


export class GetAccountsAccountOrdersCustomerOrderIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OrderState })
  orderStates?: shared.OrderState[];
}
