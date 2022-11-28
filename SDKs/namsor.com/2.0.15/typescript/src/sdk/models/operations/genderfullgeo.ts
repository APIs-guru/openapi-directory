import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenderFullGeoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2" })
  countryIso2: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fullName" })
  fullName: string;
}


export class GenderFullGeoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GenderFullGeoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenderFullGeoPathParams;

  @SpeakeasyMetadata()
  security: GenderFullGeoSecurity;
}


export class GenderFullGeoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personalNameGenderedOut?: shared.PersonalNameGenderedOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
