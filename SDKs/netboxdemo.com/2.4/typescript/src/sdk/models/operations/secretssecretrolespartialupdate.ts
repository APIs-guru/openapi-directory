import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretsSecretRolesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretRolesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretRolesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SecretRole;
}


export class SecretsSecretRolesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  secretRole?: shared.SecretRole;

  @Metadata()
  statusCode: number;
}
