import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SecretsSecretRolesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretRolesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretsSecretRolesDeletePathParams;
}


export class SecretsSecretRolesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
