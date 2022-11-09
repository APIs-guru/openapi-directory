import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}


export class UpdateDomainSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateDomainSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateDomainSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateDomainSecurityOption2;
}


export class UpdateDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDomainPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Domain;

  @Metadata()
  security: UpdateDomainSecurity;
}


export class UpdateDomainDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domain?: shared.Domain;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDomainDefaultApplicationJsonObject?: UpdateDomainDefaultApplicationJson;
}
