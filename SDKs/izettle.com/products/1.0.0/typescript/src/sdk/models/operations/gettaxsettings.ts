import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTaxSettingsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetTaxSettingsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetTaxSettingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTaxSettingsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTaxSettingsSecurityOption2;
}


export class GetTaxSettingsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetTaxSettingsSecurity;
}


export class GetTaxSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxSettingsResponse?: shared.TaxSettingsResponse;
}
