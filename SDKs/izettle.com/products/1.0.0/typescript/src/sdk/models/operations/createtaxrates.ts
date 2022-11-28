import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTaxRatesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey?: shared.SchemeZettleApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth?: shared.SchemeZettleOauth;
}


export class CreateTaxRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TaxRatesCreateRequest;

  @SpeakeasyMetadata()
  security: CreateTaxRatesSecurity;
}


export class CreateTaxRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taxRatesResponse?: shared.TaxRatesResponse;
}
