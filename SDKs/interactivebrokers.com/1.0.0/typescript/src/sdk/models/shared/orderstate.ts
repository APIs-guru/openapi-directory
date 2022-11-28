import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderStatusEnum } from "./orderstatusenum";


export enum OrderStateSideEnum {
    One = "1",
    Two = "2"
}


// OrderState
/** 
 * An object containing all the properties defining an order
**/
export class OrderState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractId" })
  contractId?: number;

  @SpeakeasyMetadata({ data: "json, name=CustomerOrderId" })
  customerOrderId?: number;

  @SpeakeasyMetadata({ data: "json, name=FilledQuantity" })
  filledQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=ListingExchange" })
  listingExchange?: string;

  @SpeakeasyMetadata({ data: "json, name=OrderType" })
  orderType?: number;

  @SpeakeasyMetadata({ data: "json, name=OutsideRTH" })
  outsideRth?: string;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=RemainingQuantity" })
  remainingQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=Side" })
  side?: OrderStateSideEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: OrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Ticker" })
  ticker?: string;

  @SpeakeasyMetadata({ data: "json, name=TimeInForce" })
  timeInForce?: number;

  @SpeakeasyMetadata({ data: "json, name=TransactionTime" })
  transactionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Warning" })
  warning?: string;
}
