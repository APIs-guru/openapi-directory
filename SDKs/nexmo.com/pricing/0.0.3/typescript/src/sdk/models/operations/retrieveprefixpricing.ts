import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrievePrefixPricingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class RetrievePrefixPricingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix: string;
}


export class RetrievePrefixPricing400ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;
}


export class RetrievePrefixPricing400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_title" })
  errorTitle: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters" })
  invalidParameters: RetrievePrefixPricing400ApplicationJsonInvalidParameters;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class RetrievePrefixPricing401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel: string;
}


export class RetrievePrefixPricingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrievePrefixPricingPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrievePrefixPricingQueryParams;
}


export class RetrievePrefixPricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pricingCountriesResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrievePrefixPricing400ApplicationJsonObject?: RetrievePrefixPricing400ApplicationJson;

  @SpeakeasyMetadata()
  retrievePrefixPricing401ApplicationJsonObject?: RetrievePrefixPricing401ApplicationJson;
}
