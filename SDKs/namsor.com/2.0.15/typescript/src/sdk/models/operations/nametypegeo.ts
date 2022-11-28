import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NameTypeGeoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=properNoun" })
  properNoun: string;
}


export class NameTypeGeoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class NameTypeGeoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NameTypeGeoPathParams;

  @SpeakeasyMetadata()
  security: NameTypeGeoSecurity;
}


export class NameTypeGeoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  properNounCategorizedOut?: shared.ProperNounCategorizedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
