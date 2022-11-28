import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteApiKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class DeleteApiKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteApiKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteApiKeyPathParams;

  @SpeakeasyMetadata()
  security: DeleteApiKeySecurity;
}


export class DeleteApiKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleted?: shared.Deleted;

  @SpeakeasyMetadata()
  statusCode: number;
}
