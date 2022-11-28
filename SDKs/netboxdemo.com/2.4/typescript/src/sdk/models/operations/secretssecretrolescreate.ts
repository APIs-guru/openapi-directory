import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SecretsSecretRolesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SecretRoleInput;
}


export class SecretsSecretRolesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  secretRole?: shared.SecretRole;

  @SpeakeasyMetadata()
  statusCode: number;
}
