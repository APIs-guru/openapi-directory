import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NameTypeGeoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=properNoun" })
  properNoun: string;
}


export class NameTypeGeoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeGeoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NameTypeGeoPathParams;

  @Metadata()
  security: NameTypeGeoSecurity;
}


export class NameTypeGeoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  properNounCategorizedOut?: shared.ProperNounCategorizedOut;

  @Metadata()
  statusCode: number;
}
