import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: number;
}


export class DeleteDomainSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteDomainSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteDomainSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteDomainSecurityOption2;
}


export class DeleteDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDomainPathParams;

  @Metadata()
  security: DeleteDomainSecurity;
}


export class DeleteDomainDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteDomain200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteDomainDefaultApplicationJsonObject?: DeleteDomainDefaultApplicationJson;
}
