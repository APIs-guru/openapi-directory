import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SevenGetListOfPaymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;
}


export class SevenGetListOfPaymentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SevenGetListOfPaymentsQueryParams;
}


export class SevenGetListOfPayments200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=actually_paid" })
  actuallyPaid?: number;

  @Metadata({ data: "json, name=order_description" })
  orderDescription?: string;

  @Metadata({ data: "json, name=order_id" })
  orderId?: string;

  @Metadata({ data: "json, name=outcome_amount" })
  outcomeAmount?: number;

  @Metadata({ data: "json, name=outcome_currency" })
  outcomeCurrency?: string;

  @Metadata({ data: "json, name=pay_address" })
  payAddress?: string;

  @Metadata({ data: "json, name=pay_amount" })
  payAmount?: number;

  @Metadata({ data: "json, name=pay_currency" })
  payCurrency?: string;

  @Metadata({ data: "json, name=payment_id" })
  paymentId?: number;

  @Metadata({ data: "json, name=payment_status" })
  paymentStatus?: string;

  @Metadata({ data: "json, name=price_amount" })
  priceAmount?: number;

  @Metadata({ data: "json, name=price_currency" })
  priceCurrency?: string;

  @Metadata({ data: "json, name=purchase_id" })
  purchaseId?: string;
}


export class SevenGetListOfPayments200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: operations.SevenGetListOfPayments200ApplicationJsonData })
  data?: SevenGetListOfPayments200ApplicationJsonData[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pagesCount" })
  pagesCount?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class SevenGetListOfPaymentsResponse extends SpeakeasyBase {
  @Metadata()
  sevenGetListOfPayments200ApplicationJsonObject?: SevenGetListOfPayments200ApplicationJson;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
