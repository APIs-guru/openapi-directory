import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ParseNameGeoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nameFull" })
  nameFull: string;
}


export class ParseNameGeoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ParseNameGeoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ParseNameGeoPathParams;

  @SpeakeasyMetadata()
  security: ParseNameGeoSecurity;
}


export class ParseNameGeoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameParsedOut?: shared.PersonalNameParsedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
