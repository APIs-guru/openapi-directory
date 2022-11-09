import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSshKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sshKeyId" })
  sshKeyId: number;
}


export class UpdateSshKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateSshKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateSshKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateSshKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateSshKeySecurityOption2;
}


export class UpdateSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSshKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SshKey;

  @Metadata()
  security: UpdateSshKeySecurity;
}


export class UpdateSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sshKey?: shared.SshKey;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateSshKeyDefaultApplicationJsonObject?: UpdateSshKeyDefaultApplicationJson;
}
