import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SecretsSecretRolesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretRolesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretsSecretRolesUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SecretRoleInput;
}


export class SecretsSecretRolesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  secretRole?: shared.SecretRole;

  @SpeakeasyMetadata()
  statusCode: number;
}
