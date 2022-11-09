import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateManagedCredentialUsernamePasswordPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: number;
}


export class UpdateManagedCredentialUsernamePasswordSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateManagedCredentialUsernamePasswordSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateManagedCredentialUsernamePasswordSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateManagedCredentialUsernamePasswordSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateManagedCredentialUsernamePasswordSecurityOption2;
}


export class UpdateManagedCredentialUsernamePasswordRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateManagedCredentialUsernamePasswordPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: UpdateManagedCredentialUsernamePasswordSecurity;
}


export class UpdateManagedCredentialUsernamePasswordDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedCredentialUsernamePasswordResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateManagedCredentialUsernamePassword200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  updateManagedCredentialUsernamePasswordDefaultApplicationJsonObject?: UpdateManagedCredentialUsernamePasswordDefaultApplicationJson;
}
