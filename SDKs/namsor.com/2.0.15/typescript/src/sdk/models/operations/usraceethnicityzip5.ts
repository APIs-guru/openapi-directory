import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsRaceEthnicityZip5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zip5Code" })
  zip5Code: string;
}


export class UsRaceEthnicityZip5Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UsRaceEthnicityZip5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsRaceEthnicityZip5PathParams;

  @SpeakeasyMetadata()
  security: UsRaceEthnicityZip5Security;
}


export class UsRaceEthnicityZip5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firstLastNameUsRaceEthnicityOut?: shared.FirstLastNameUsRaceEthnicityOut;

  @SpeakeasyMetadata()
  statusCode: number;
}
