import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretsSecretsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableSecret;
}


export class SecretsSecretsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  secret?: shared.Secret;

  @Metadata()
  statusCode: number;
}
