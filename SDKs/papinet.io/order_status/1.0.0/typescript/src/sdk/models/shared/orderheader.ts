import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OrderHeaderOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}


export class OrderHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfLineItems" })
  numberOfLineItems: number;

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber: string;

  @SpeakeasyMetadata({ data: "json, name=orderStatus" })
  orderStatus: OrderHeaderOrderStatusEnum;
}
