import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CorridorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2From" })
  countryIso2From: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=countryIso2To" })
  countryIso2To: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstNameFrom" })
  firstNameFrom: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstNameTo" })
  firstNameTo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastNameFrom" })
  lastNameFrom: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastNameTo" })
  lastNameTo: string;
}


export class CorridorSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class CorridorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CorridorPathParams;

  @Metadata()
  security: CorridorSecurity;
}


export class CorridorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  corridorOut?: shared.CorridorOut;

  @Metadata()
  statusCode: number;
}
