import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrievePrefixPricingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class RetrievePrefixPricingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix: string;
}


export class RetrievePrefixPricingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrievePrefixPricingPathParams;

  @Metadata()
  queryParams: RetrievePrefixPricingQueryParams;
}


export class RetrievePrefixPricing400ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;
}


export class RetrievePrefixPricing400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_title" })
  errorTitle: string;

  @Metadata({ data: "json, name=invalid_parameters" })
  invalidParameters: RetrievePrefixPricing400ApplicationJsonInvalidParameters;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RetrievePrefixPricing401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel: string;
}


export class RetrievePrefixPricingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pricingCountriesResponse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrievePrefixPricing400ApplicationJsonObject?: RetrievePrefixPricing400ApplicationJson;

  @Metadata()
  retrievePrefixPricing401ApplicationJsonObject?: RetrievePrefixPricing401ApplicationJson;
}
