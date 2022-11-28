import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateApiKeyFromGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class CreateApiKeyFromGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateApiKeyFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateApiKeyFromGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ApiKey;

  @SpeakeasyMetadata()
  security: CreateApiKeyFromGroupSecurity;
}


export class CreateApiKeyFromGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
