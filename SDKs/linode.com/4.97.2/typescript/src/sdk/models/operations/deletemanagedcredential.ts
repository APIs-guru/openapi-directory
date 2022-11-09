import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteManagedCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: number;
}


export class DeleteManagedCredentialSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteManagedCredentialSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteManagedCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteManagedCredentialSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteManagedCredentialSecurityOption2;
}


export class DeleteManagedCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteManagedCredentialPathParams;

  @Metadata()
  security: DeleteManagedCredentialSecurity;
}


export class DeleteManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteManagedCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteManagedCredential200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteManagedCredentialDefaultApplicationJsonObject?: DeleteManagedCredentialDefaultApplicationJson;
}
