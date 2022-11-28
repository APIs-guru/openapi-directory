import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SevenGetListOfPaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" })
  sortBy?: string;
}


export class SevenGetListOfPayments200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actually_paid" })
  actuallyPaid?: number;

  @SpeakeasyMetadata({ data: "json, name=order_description" })
  orderDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=order_id" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=outcome_amount" })
  outcomeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=outcome_currency" })
  outcomeCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=pay_address" })
  payAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=pay_amount" })
  payAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=pay_currency" })
  payCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_id" })
  paymentId?: number;

  @SpeakeasyMetadata({ data: "json, name=payment_status" })
  paymentStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=price_amount" })
  priceAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=price_currency" })
  priceCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=purchase_id" })
  purchaseId?: string;
}


export class SevenGetListOfPayments200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: SevenGetListOfPayments200ApplicationJsonData })
  data?: SevenGetListOfPayments200ApplicationJsonData[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pagesCount" })
  pagesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class SevenGetListOfPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SevenGetListOfPaymentsQueryParams;
}


export class SevenGetListOfPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sevenGetListOfPayments200ApplicationJsonObject?: SevenGetListOfPayments200ApplicationJson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
