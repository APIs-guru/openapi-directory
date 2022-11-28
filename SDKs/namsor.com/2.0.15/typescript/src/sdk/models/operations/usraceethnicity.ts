import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsRaceEthnicityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;
}


export class UsRaceEthnicitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UsRaceEthnicityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsRaceEthnicityPathParams;

  @SpeakeasyMetadata()
  security: UsRaceEthnicitySecurity;
}


export class UsRaceEthnicityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameUsRaceEthnicityOut?: shared.FirstLastNameUsRaceEthnicityOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
