import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloneDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: string;
}


export class CloneDomainRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;
}


export class CloneDomainSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CloneDomainSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CloneDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloneDomainSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloneDomainSecurityOption2;
}


export class CloneDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneDomainPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CloneDomainRequestBody;

  @Metadata()
  security: CloneDomainSecurity;
}


export class CloneDomainDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domain?: shared.Domain;

  @Metadata()
  statusCode: number;

  @Metadata()
  cloneDomainDefaultApplicationJsonObject?: CloneDomainDefaultApplicationJson;
}
