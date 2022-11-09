import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsRaceEthnicityZip5PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firstName" })
  firstName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lastName" })
  lastName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=zip5Code" })
  zip5Code: string;
}


export class UsRaceEthnicityZip5Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UsRaceEthnicityZip5Request extends SpeakeasyBase {
  @Metadata()
  pathParams: UsRaceEthnicityZip5PathParams;

  @Metadata()
  security: UsRaceEthnicityZip5Security;
}


export class UsRaceEthnicityZip5Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firstLastNameUsRaceEthnicityOut?: shared.FirstLastNameUsRaceEthnicityOut;

  @Metadata()
  statusCode: number;
}
