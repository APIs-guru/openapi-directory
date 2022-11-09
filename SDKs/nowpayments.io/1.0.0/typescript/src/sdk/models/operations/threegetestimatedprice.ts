import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ThreeGetEstimatedPriceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency_from" })
  currencyFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=currency_to" })
  currencyTo?: string;
}


export class ThreeGetEstimatedPriceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ThreeGetEstimatedPriceQueryParams;
}


export class ThreeGetEstimatedPrice200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount_from" })
  amountFrom?: number;

  @Metadata({ data: "json, name=currency_from" })
  currencyFrom?: string;

  @Metadata({ data: "json, name=currency_to" })
  currencyTo?: string;

  @Metadata({ data: "json, name=estimated_amount" })
  estimatedAmount?: number;
}


export class ThreeGetEstimatedPriceResponse extends SpeakeasyBase {
  @Metadata()
  threeGetEstimatedPrice200ApplicationJsonObject?: ThreeGetEstimatedPrice200ApplicationJson;

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
