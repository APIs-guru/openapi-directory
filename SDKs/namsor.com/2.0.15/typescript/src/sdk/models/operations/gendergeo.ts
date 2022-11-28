import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderGeoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class GenderGeoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderGeoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderGeoPathParams;

  @SpeakeasyMetadata()
  security: GenderGeoSecurity;
}


export class GenderGeoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
