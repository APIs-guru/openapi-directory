import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrievePricingAllCountriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class RetrievePricingAllCountriesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class RetrievePricingAllCountriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrievePricingAllCountriesPathParams;

  @Metadata()
  queryParams: RetrievePricingAllCountriesQueryParams;
}


export class RetrievePricingAllCountries400ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;
}


export class RetrievePricingAllCountries400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error_title" })
  errorTitle: string;

  @Metadata({ data: "json, name=invalid_parameters" })
  invalidParameters: RetrievePricingAllCountries400ApplicationJsonInvalidParameters;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RetrievePricingAllCountries401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: string;

  @Metadata({ data: "json, name=currency" })
  currency: string;

  @Metadata({ data: "json, name=error-code-label" })
  errorCodeLabel: string;
}


export class RetrievePricingAllCountriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pricingCountriesResponse?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrievePricingAllCountries400ApplicationJsonObject?: RetrievePricingAllCountries400ApplicationJson;

  @Metadata()
  retrievePricingAllCountries401ApplicationJsonObject?: RetrievePricingAllCountries401ApplicationJson;
}
