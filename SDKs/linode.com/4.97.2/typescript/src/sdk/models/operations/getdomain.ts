import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}


export class GetDomainSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetDomainSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetDomainSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetDomainSecurityOption2;
}


export class GetDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainPathParams;

  @Metadata()
  security: GetDomainSecurity;
}


export class GetDomainDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domain?: shared.Domain;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDomainDefaultApplicationJsonObject?: GetDomainDefaultApplicationJson;
}
