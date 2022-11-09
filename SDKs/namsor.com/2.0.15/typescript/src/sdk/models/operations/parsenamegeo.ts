import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ParseNameGeoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nameFull" })
  nameFull: string;
}


export class ParseNameGeoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameGeoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ParseNameGeoPathParams;

  @Metadata()
  security: ParseNameGeoSecurity;
}


export class ParseNameGeoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @Metadata()
  statusCode: number;
}
