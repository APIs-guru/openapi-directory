import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSshKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sshKeyId" })
  sshKeyId: number;
}


export class DeleteSshKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteSshKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteSshKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSshKeyPathParams;

  @SpeakeasyMetadata()
  security: DeleteSshKeySecurity;
}


export class DeleteSshKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteSshKey200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteSshKeyDefaultApplicationJsonObject?: DeleteSshKeyDefaultApplicationJson;
}
