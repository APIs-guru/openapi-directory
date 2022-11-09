import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSshKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sshKeyId" })
  sshKeyId: number;
}


export class GetSshKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetSshKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetSshKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetSshKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetSshKeySecurityOption2;
}


export class GetSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSshKeyPathParams;

  @Metadata()
  security: GetSshKeySecurity;
}


export class GetSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  sshKey?: shared.SshKey;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSshKeyDefaultApplicationJsonObject?: GetSshKeyDefaultApplicationJson;
}
