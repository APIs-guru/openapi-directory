import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CountryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=personalNameFull" })
  personalNameFull: string;
}


export class CountrySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CountryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CountryPathParams;

  @SpeakeasyMetadata()
  security: CountrySecurity;
}


export class CountryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameGeoOut?: shared.PersonalNameGeoOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
