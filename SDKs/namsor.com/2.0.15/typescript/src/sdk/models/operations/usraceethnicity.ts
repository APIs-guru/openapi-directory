import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsRaceEthnicityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class UsRaceEthnicitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UsRaceEthnicityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsRaceEthnicityPathParams;

  @Metadata()
  security: UsRaceEthnicitySecurity;
}


export class UsRaceEthnicityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNameUsRaceEthnicityOut?: shared.FirstLastNameUsRaceEthnicityOut;

  @Metadata()
  statusCode: number;
}
