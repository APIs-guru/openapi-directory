import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportDomainSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ImportDomainSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ImportDomainSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ImportDomainSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ImportDomainSecurityOption2;
}


export class ImportDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: ImportDomainSecurity;
}


export class ImportDomainDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ImportDomainResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  domain?: shared.Domain;

  @Metadata()
  statusCode: number;

  @Metadata()
  importDomainDefaultApplicationJsonObject?: ImportDomainDefaultApplicationJson;
}
