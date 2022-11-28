import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteManagedCredentialPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: number;
}


export class DeleteManagedCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteManagedCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteManagedCredentialPathParams;

  @SpeakeasyMetadata()
  security: DeleteManagedCredentialSecurity;
}


export class DeleteManagedCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteManagedCredential200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteManagedCredentialDefaultApplicationJsonObject?: DeleteManagedCredentialDefaultApplicationJson;
}
