import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLocalizationOptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLocalizationOptionsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetLocalizationOptionsSecurity;
}


export class GetLocalizationOptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LocalizationOption })
  localizationOptions?: shared.LocalizationOption[];

  @Metadata()
  statusCode: number;
}
