import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateApiKeyFromGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class CreateApiKeyFromGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateApiKeyFromGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateApiKeyFromGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ApiKey;

  @Metadata()
  security: CreateApiKeyFromGroupSecurity;
}


export class CreateApiKeyFromGroupResponse extends SpeakeasyBase {
  @Metadata()
  apiKey?: shared.ApiKey;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
