import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SecretsSecretRolesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretRolesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretsSecretRolesReadPathParams;
}


export class SecretsSecretRolesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  secretRole?: shared.SecretRole;

  @SpeakeasyMetadata()
  statusCode: number;
}
