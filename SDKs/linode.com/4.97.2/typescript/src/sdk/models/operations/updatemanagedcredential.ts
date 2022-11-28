import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateManagedCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: number;
}


export class UpdateManagedCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateManagedCredentialPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ManagedCredentialInput;

  @SpeakeasyMetadata()
  security: UpdateManagedCredentialSecurity;
}


export class UpdateManagedCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  managedCredential?: shared.ManagedCredential;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateManagedCredentialDefaultApplicationJsonObject?: UpdateManagedCredentialDefaultApplicationJson;
}
