import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateManagedCredentialRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=last_decrypted" })
  lastDecrypted?: Date;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class CreateManagedCredentialSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateManagedCredentialSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateManagedCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateManagedCredentialSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateManagedCredentialSecurityOption2;
}


export class CreateManagedCredentialRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateManagedCredentialRequestBody;

  @Metadata()
  security: CreateManagedCredentialSecurity;
}


export class CreateManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateManagedCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedCredential?: shared.ManagedCredential;

  @Metadata()
  statusCode: number;

  @Metadata()
  createManagedCredentialDefaultApplicationJsonObject?: CreateManagedCredentialDefaultApplicationJson;
}
