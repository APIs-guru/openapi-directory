import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretsSecretsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretsReadPathParams;
}


export class SecretsSecretsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  secret?: shared.Secret;

  @Metadata()
  statusCode: number;
}
