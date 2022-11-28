import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ViewManagedSshKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


// ViewManagedSshKey200ApplicationJson
/** 
 * A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.
 * 
**/
export class ViewManagedSshKey200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ssh_key" })
  sshKey?: string;
}


export class ViewManagedSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ViewManagedSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ViewManagedSshKeySecurity;
}


export class ViewManagedSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  viewManagedSshKey200ApplicationJsonObject?: ViewManagedSshKey200ApplicationJson;

  @SpeakeasyMetadata()
  viewManagedSshKeyDefaultApplicationJsonObject?: ViewManagedSshKeyDefaultApplicationJson;
}
