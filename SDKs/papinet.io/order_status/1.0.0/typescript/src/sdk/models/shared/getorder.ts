import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationLinks } from "./paginationlinks";
import { OrderLineItem } from "./orderlineitem";

export enum GetOrderOrderStatusEnum {
    Active = "Active"
,    Cancelled = "Cancelled"
,    Completed = "Completed"
}


export class GetOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links?: PaginationLinks;

  @Metadata({ data: "json, name=numberOfLineItems" })
  numberOfLineItems: number;

  @Metadata({ data: "json, name=orderLineItems", elemType: shared.OrderLineItem })
  orderLineItems?: OrderLineItem[];

  @Metadata({ data: "json, name=orderNumber" })
  orderNumber: string;

  @Metadata({ data: "json, name=orderStatus" })
  orderStatus: GetOrderOrderStatusEnum;
}
