import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTaxRatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxRateUuid" })
  taxRateUuid: string;
}


export class GetTaxRateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetTaxRateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetTaxRateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTaxRateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTaxRateSecurityOption2;
}


export class GetTaxRateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaxRatePathParams;

  @Metadata()
  security: GetTaxRateSecurity;
}


export class GetTaxRateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxRate?: shared.TaxRate;
}
