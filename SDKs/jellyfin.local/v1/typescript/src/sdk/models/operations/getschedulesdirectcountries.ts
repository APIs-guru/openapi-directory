import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSchedulesDirectCountriesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetSchedulesDirectCountriesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetSchedulesDirectCountriesSecurity;
}


export class GetSchedulesDirectCountriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSchedulesDirectCountries200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
