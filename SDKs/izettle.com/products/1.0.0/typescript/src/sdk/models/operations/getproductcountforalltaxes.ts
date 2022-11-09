import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProductCountForAllTaxesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetProductCountForAllTaxesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetProductCountForAllTaxesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetProductCountForAllTaxesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetProductCountForAllTaxesSecurityOption2;
}


export class GetProductCountForAllTaxesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetProductCountForAllTaxesSecurity;
}


export class GetProductCountForAllTaxesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxRateProductCountResponse?: shared.TaxRateProductCountResponse;
}
