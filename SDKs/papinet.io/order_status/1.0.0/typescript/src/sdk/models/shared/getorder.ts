import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationLinks } from "./paginationlinks";
import { OrderLineItem } from "./orderlineitem";


export enum GetOrderOrderStatusEnum {
    Active = "Active",
    Cancelled = "Cancelled",
    Completed = "Completed"
}


export class GetOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: PaginationLinks;

  @SpeakeasyMetadata({ data: "json, name=numberOfLineItems" })
  numberOfLineItems: number;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: OrderLineItem })
  orderLineItems?: OrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber: string;

  @SpeakeasyMetadata({ data: "json, name=orderStatus" })
  orderStatus: GetOrderOrderStatusEnum;
}
