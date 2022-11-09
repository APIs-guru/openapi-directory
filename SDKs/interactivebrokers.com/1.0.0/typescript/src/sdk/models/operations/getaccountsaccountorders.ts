import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsAccountOrdersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class GetAccountsAccountOrdersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountOrdersPathParams;
}


export class GetAccountsAccountOrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OrderState })
  orderStates?: shared.OrderState[];
}
