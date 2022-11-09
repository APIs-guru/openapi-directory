import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SecretsSecretRolesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretRolesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretRolesDeletePathParams;
}


export class SecretsSecretRolesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
