import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SecretsSecretsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SecretsSecretsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SecretsSecretsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableSecret;
}


export class SecretsSecretsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  secret?: shared.Secret;

  @Metadata()
  statusCode: number;
}
