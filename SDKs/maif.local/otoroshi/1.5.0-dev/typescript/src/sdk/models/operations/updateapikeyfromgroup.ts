import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateApiKeyFromGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class UpdateApiKeyFromGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateApiKeyFromGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateApiKeyFromGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ApiKey;

  @Metadata()
  security: UpdateApiKeyFromGroupSecurity;
}


export class UpdateApiKeyFromGroupResponse extends SpeakeasyBase {
  @Metadata()
  apiKey?: shared.ApiKey;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
