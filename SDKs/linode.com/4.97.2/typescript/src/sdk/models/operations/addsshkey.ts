import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddSshKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AddSshKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddSshKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AddSshKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AddSshKeySecurityOption2;
}


export class AddSshKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SshKeyRequest;

  @Metadata()
  security: AddSshKeySecurity;
}


export class AddSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sshKey?: shared.SshKey;

  @Metadata()
  statusCode: number;

  @Metadata()
  addSshKeyDefaultApplicationJsonObject?: AddSshKeyDefaultApplicationJson;
}
