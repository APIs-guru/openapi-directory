import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateApiKeyFromGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class UpdateApiKeyFromGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateApiKeyFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateApiKeyFromGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ApiKey;

  @SpeakeasyMetadata()
  security: UpdateApiKeyFromGroupSecurity;
}


export class UpdateApiKeyFromGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
