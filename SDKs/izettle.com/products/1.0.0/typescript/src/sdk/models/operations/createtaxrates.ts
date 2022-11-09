import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTaxRatesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class CreateTaxRatesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class CreateTaxRatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateTaxRatesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateTaxRatesSecurityOption2;
}


export class CreateTaxRatesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TaxRatesCreateRequest;

  @Metadata()
  security: CreateTaxRatesSecurity;
}


export class CreateTaxRatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxRatesResponse?: shared.TaxRatesResponse;
}
