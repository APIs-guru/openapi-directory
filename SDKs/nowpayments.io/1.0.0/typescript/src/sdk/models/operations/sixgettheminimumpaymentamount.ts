import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SixGetTheMinimumPaymentAmountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currency_from" })
  currencyFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency_to" })
  currencyTo?: string;
}


export class SixGetTheMinimumPaymentAmountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SixGetTheMinimumPaymentAmountQueryParams;
}


export class SixGetTheMinimumPaymentAmount200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency_from" })
  currencyFrom?: string;

  @Metadata({ data: "json, name=currency_to" })
  currencyTo?: string;

  @Metadata({ data: "json, name=min_amount" })
  minAmount?: number;
}


export class SixGetTheMinimumPaymentAmountResponse extends SpeakeasyBase {
  @Metadata()
  sixGetTheMinimumPaymentAmount200ApplicationJsonObject?: SixGetTheMinimumPaymentAmount200ApplicationJson;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
