import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretsSecretRolesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretRolesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretRolesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SecretRole;
}


export class SecretsSecretRolesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  secretRole?: shared.SecretRole;

  @Metadata()
  statusCode: number;
}
