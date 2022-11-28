import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateManagedCredentialUsernamePasswordPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: number;
}


export class UpdateManagedCredentialUsernamePasswordSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateManagedCredentialUsernamePasswordDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedCredentialUsernamePasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateManagedCredentialUsernamePasswordPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: UpdateManagedCredentialUsernamePasswordSecurity;
}


export class UpdateManagedCredentialUsernamePasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateManagedCredentialUsernamePassword200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  updateManagedCredentialUsernamePasswordDefaultApplicationJsonObject?: UpdateManagedCredentialUsernamePasswordDefaultApplicationJson;
}
