import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTaxRatesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetTaxRatesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetTaxRatesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTaxRatesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTaxRatesSecurityOption2;
}


export class GetTaxRatesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetTaxRatesSecurity;
}


export class GetTaxRatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TaxRatesResponse })
  taxRatesResponses?: shared.TaxRatesResponse[];
}
