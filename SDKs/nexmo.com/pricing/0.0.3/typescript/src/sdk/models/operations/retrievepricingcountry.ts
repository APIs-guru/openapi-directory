import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrievePricingCountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class RetrievePricingCountryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class RetrievePricingCountryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrievePricingCountryPathParams;

  @Metadata()
  queryParams: RetrievePricingCountryQueryParams;
}


export class RetrievePricingCountry400ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;
}


export class RetrievePricingCountry400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_title" })
  errorTitle: string;

  @Metadata({ data: "json, name=invalid_parameters" })
  invalidParameters: RetrievePricingCountry400ApplicationJsonInvalidParameters;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RetrievePricingCountry401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel: string;
}


export class RetrievePricingCountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pricingCountryResponse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrievePricingCountry400ApplicationJsonObject?: RetrievePricingCountry400ApplicationJson;

  @Metadata()
  retrievePricingCountry401ApplicationJsonObject?: RetrievePricingCountry401ApplicationJson;
}
