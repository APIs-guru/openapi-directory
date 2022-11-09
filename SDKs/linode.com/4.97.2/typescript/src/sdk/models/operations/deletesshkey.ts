import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSshKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=sshKeyId" })
  sshKeyId: number;
}


export class DeleteSshKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteSshKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteSshKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteSshKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteSshKeySecurityOption2;
}


export class DeleteSshKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSshKeyPathParams;

  @Metadata()
  security: DeleteSshKeySecurity;
}


export class DeleteSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteSshKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteSshKey200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteSshKeyDefaultApplicationJsonObject?: DeleteSshKeyDefaultApplicationJson;
}
