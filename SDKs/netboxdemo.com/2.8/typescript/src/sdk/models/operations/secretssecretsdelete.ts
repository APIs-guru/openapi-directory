import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SecretsSecretsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretsSecretsDeletePathParams;
}


export class SecretsSecretsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
