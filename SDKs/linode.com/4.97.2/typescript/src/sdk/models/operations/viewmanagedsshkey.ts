import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ViewManagedSshKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ViewManagedSshKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ViewManagedSshKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ViewManagedSshKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ViewManagedSshKeySecurityOption2;
}


export class ViewManagedSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  security: ViewManagedSshKeySecurity;
}


// ViewManagedSshKey200ApplicationJson
/** 
 * A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.
 * 
**/
export class ViewManagedSshKey200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=ssh_key" })
  sshKey?: string;
}


export class ViewManagedSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ViewManagedSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  viewManagedSshKey200ApplicationJsonObject?: ViewManagedSshKey200ApplicationJson;

  @Metadata()
  viewManagedSshKeyDefaultApplicationJsonObject?: ViewManagedSshKeyDefaultApplicationJson;
}
