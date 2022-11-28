import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCountriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetCountriesSecurity;
}


export class GetCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CountryInfo })
  countryInfos?: shared.CountryInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
