import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CorridorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2From" })
  countryIso2From: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=countryIso2To" })
  countryIso2To: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstNameFrom" })
  firstNameFrom: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstNameTo" })
  firstNameTo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastNameFrom" })
  lastNameFrom: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastNameTo" })
  lastNameTo: string;
}


export class CorridorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CorridorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CorridorPathParams;

  @SpeakeasyMetadata()
  security: CorridorSecurity;
}


export class CorridorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  corridorOut?: shared.CorridorOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
