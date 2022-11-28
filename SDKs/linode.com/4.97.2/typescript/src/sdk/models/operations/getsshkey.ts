import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSshKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sshKeyId" })
  sshKeyId: number;
}


export class GetSshKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSshKeyPathParams;

  @SpeakeasyMetadata()
  security: GetSshKeySecurity;
}


export class GetSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sshKey?: shared.SshKey;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSshKeyDefaultApplicationJsonObject?: GetSshKeyDefaultApplicationJson;
}
