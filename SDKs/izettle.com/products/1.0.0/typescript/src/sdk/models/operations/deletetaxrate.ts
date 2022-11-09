import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteTaxRatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taxRateUuid" })
  taxRateUuid: string;
}


export class DeleteTaxRateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class DeleteTaxRateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class DeleteTaxRateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteTaxRateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteTaxRateSecurityOption2;
}


export class DeleteTaxRateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTaxRatePathParams;

  @Metadata()
  security: DeleteTaxRateSecurity;
}


export class DeleteTaxRateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
