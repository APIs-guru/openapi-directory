import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OrderHeaderOrderStatusEnum {
    Active = "Active"
,    Cancelled = "Cancelled"
,    Completed = "Completed"
}


export class OrderHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=numberOfLineItems" })
  numberOfLineItems: number;

  @Metadata({ data: "json, name=orderNumber" })
  orderNumber: string;

  @Metadata({ data: "json, name=orderStatus" })
  orderStatus: OrderHeaderOrderStatusEnum;
}
