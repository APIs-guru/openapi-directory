import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SecretsSecretsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SecretsSecretsReadPathParams;
}


export class SecretsSecretsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  secret?: shared.Secret;

  @SpeakeasyMetadata()
  statusCode: number;
}
