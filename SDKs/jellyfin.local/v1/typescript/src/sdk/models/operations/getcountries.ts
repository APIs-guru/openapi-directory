import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCountriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetCountriesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetCountriesSecurity;
}


export class GetCountriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CountryInfo })
  countryInfos?: shared.CountryInfo[];

  @Metadata()
  statusCode: number;
}
