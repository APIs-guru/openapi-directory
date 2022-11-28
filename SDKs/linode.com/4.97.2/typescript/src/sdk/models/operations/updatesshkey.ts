import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSshKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sshKeyId" })
  sshKeyId: number;
}


export class UpdateSshKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSshKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SshKeyInput;

  @SpeakeasyMetadata()
  security: UpdateSshKeySecurity;
}


export class UpdateSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  sshKey?: shared.SshKey;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateSshKeyDefaultApplicationJsonObject?: UpdateSshKeyDefaultApplicationJson;
}
