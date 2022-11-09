import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenderFullGeoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=fullName" })
  fullName: string;
}


export class GenderFullGeoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderFullGeoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenderFullGeoPathParams;

  @Metadata()
  security: GenderFullGeoSecurity;
}


export class GenderFullGeoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @Metadata()
  statusCode: number;
}
