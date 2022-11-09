import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainZonePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: string;
}


export class GetDomainZoneSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetDomainZoneSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDomainZoneSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetDomainZoneSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetDomainZoneSecurityOption2;
}


export class GetDomainZoneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainZonePathParams;

  @Metadata()
  security: GetDomainZoneSecurity;
}


export class GetDomainZoneDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDomainZoneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomainZone200ApplicationJsonAny?: any;

  @Metadata()
  getDomainZoneDefaultApplicationJsonObject?: GetDomainZoneDefaultApplicationJson;
}
