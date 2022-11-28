import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrievePricingCountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class RetrievePricingCountryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_secret" })
  apiSecret: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class RetrievePricingCountry400ApplicationJsonInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;
}


export class RetrievePricingCountry400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error_title" })
  errorTitle: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters" })
  invalidParameters: RetrievePricingCountry400ApplicationJsonInvalidParameters;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class RetrievePricingCountry401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: string;

  @SpeakeasyMetadata({ data: "json, name=error-code-label" })
  errorCodeLabel: string;
}


export class RetrievePricingCountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrievePricingCountryPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrievePricingCountryQueryParams;
}


export class RetrievePricingCountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pricingCountryResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrievePricingCountry400ApplicationJsonObject?: RetrievePricingCountry400ApplicationJson;

  @SpeakeasyMetadata()
  retrievePricingCountry401ApplicationJsonObject?: RetrievePricingCountry401ApplicationJson;
}
