import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ThreeGetEstimatedPriceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency_from" })
  currencyFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency_to" })
  currencyTo?: string;
}


export class ThreeGetEstimatedPrice200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount_from" })
  amountFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=currency_from" })
  currencyFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=currency_to" })
  currencyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=estimated_amount" })
  estimatedAmount?: number;
}


export class ThreeGetEstimatedPriceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ThreeGetEstimatedPriceQueryParams;
}


export class ThreeGetEstimatedPriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  threeGetEstimatedPrice200ApplicationJsonObject?: ThreeGetEstimatedPrice200ApplicationJson;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
