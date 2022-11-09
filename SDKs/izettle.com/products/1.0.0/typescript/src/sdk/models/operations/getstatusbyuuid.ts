import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatusByUuidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=importUuid" })
  importUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" })
  organizationUuid: string;
}


export class GetStatusByUuidSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  zettleApiKey: shared.SchemeZettleApiKey;
}


export class GetStatusByUuidSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  zettleOauth: shared.SchemeZettleOauth;
}


export class GetStatusByUuidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetStatusByUuidSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetStatusByUuidSecurityOption2;
}


export class GetStatusByUuidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStatusByUuidPathParams;

  @Metadata()
  security: GetStatusByUuidSecurity;
}


export class GetStatusByUuidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  importResponse?: shared.ImportResponse;

  @Metadata()
  statusCode: number;
}
