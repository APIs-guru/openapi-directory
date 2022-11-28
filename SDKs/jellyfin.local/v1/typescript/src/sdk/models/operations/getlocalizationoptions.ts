import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLocalizationOptionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLocalizationOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetLocalizationOptionsSecurity;
}


export class GetLocalizationOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LocalizationOption })
  localizationOptions?: shared.LocalizationOption[];

  @SpeakeasyMetadata()
  statusCode: number;
}
