import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderStatusEnum } from "./orderstatusenum";

export enum OrderStateSideEnum {
    One = "1"
,    Two = "2"
}


// OrderState
/** 
 * An object containing all the properties defining an order
**/
export class OrderState extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContractId" })
  contractId?: number;

  @Metadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: number;

  @Metadata({ data: "json, name=FilledQuantity" })
  filledQuantity?: number;

  @Metadata({ data: "json, name=ListingExchange" })
  listingExchange?: string;

  @Metadata({ data: "json, name=OrderType" })
  orderType?: number;

  @Metadata({ data: "json, name=OutsideRTH" })
  outsideRth?: string;

  @Metadata({ data: "json, name=Price" })
  price?: number;

  @Metadata({ data: "json, name=RemainingQuantity" })
  remainingQuantity?: number;

  @Metadata({ data: "json, name=Side" })
  side?: OrderStateSideEnum;

  @Metadata({ data: "json, name=Status" })
  status?: OrderStatusEnum;

  @Metadata({ data: "json, name=Ticker" })
  ticker?: string;

  @Metadata({ data: "json, name=TimeInForce" })
  timeInForce?: number;

  @Metadata({ data: "json, name=TransactionTime" })
  transactionTime?: string;

  @Metadata({ data: "json, name=Warning" })
  warning?: string;
}
