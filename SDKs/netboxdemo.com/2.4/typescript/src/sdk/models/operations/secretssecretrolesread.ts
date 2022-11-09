import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretsSecretRolesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretRolesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretRolesReadPathParams;
}


export class SecretsSecretRolesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  secretRole?: shared.SecretRole;

  @Metadata()
  statusCode: number;
}
