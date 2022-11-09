import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAccountsAccountTradesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account" })
  account: string;
}


export class GetAccountsAccountTradesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAccountsAccountTradesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: string;
}

export enum GetAccountsAccountTrades200ApplicationJsonSideEnum {
    One = "1"
,    Two = "2"
}


export class GetAccountsAccountTrades200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=AvgPrice" })
  avgPrice?: number;

  @Metadata({ data: "json, name=Commission" })
  commission?: number;

  @Metadata({ data: "json, name=CommissionCurrency" })
  commissionCurrency?: string;

  @Metadata({ data: "json, name=ContractId" })
  contractId?: number;

  @Metadata({ data: "json, name=Currency" })
  currency?: string;

  @Metadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: number;

  @Metadata({ data: "json, name=ExecId" })
  execId?: string;

  @Metadata({ data: "json, name=ExecutionTime" })
  executionTime?: string;

  @Metadata({ data: "json, name=FilledQuantity" })
  filledQuantity?: number;

  @Metadata({ data: "json, name=LastMarket" })
  lastMarket?: string;

  @Metadata({ data: "json, name=ListingExchange" })
  listingExchange?: string;

  @Metadata({ data: "json, name=OrderId" })
  orderId?: string;

  @Metadata({ data: "json, name=OrderType" })
  orderType?: number;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=RemainingQuantity" })
  remainingQuantity?: number;

  @Metadata({ data: "json, name=Side" })
  side?: GetAccountsAccountTrades200ApplicationJsonSideEnum;

  @Metadata({ data: "json, name=Ticker" })
  ticker?: string;

  @Metadata({ data: "json, name=TradePrice" })
  tradePrice?: number;

  @Metadata({ data: "json, name=TradeSize" })
  tradeSize?: number;
}


export class GetAccountsAccountTradesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: operations.GetAccountsAccountTrades200ApplicationJson })
  getAccountsAccountTrades200ApplicationJsonObjects?: GetAccountsAccountTrades200ApplicationJson[];

  @Metadata()
  statusCode: number;
}
