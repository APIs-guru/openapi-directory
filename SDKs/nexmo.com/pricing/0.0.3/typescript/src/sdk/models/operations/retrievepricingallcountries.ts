import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrievePricingAllCountriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class RetrievePricingAllCountriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;
}


export class RetrievePricingAllCountries400ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;
}


export class RetrievePricingAllCountries400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_title" })
  errorTitle: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters" })
  invalidParameters: RetrievePricingAllCountries400ApplicationJsonInvalidParameters;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class RetrievePricingAllCountries401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel: string;
}


export class RetrievePricingAllCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrievePricingAllCountriesPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrievePricingAllCountriesQueryParams;
}


export class RetrievePricingAllCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pricingCountriesResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrievePricingAllCountries400ApplicationJsonObject?: RetrievePricingAllCountries400ApplicationJson;

  @SpeakeasyMetadata()
  retrievePricingAllCountries401ApplicationJsonObject?: RetrievePricingAllCountries401ApplicationJson;
}
