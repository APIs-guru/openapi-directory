import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CountryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=personalNameFull" })
  personalNameFull: string;
}


export class CountrySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CountryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CountryPathParams;

  @Metadata()
  security: CountrySecurity;
}


export class CountryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameGeoOut?: shared.PersonalNameGeoOut;

  @Metadata()
  statusCode: number;
}
