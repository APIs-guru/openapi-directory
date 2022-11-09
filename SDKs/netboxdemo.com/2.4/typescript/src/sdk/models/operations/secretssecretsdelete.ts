import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SecretsSecretsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretsDeletePathParams;
}


export class SecretsSecretsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
