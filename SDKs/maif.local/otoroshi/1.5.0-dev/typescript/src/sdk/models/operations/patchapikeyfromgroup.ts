import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchApiKeyFromGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class PatchApiKeyFromGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchApiKeyFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchApiKeyFromGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchApiKeyFromGroupSecurity;
}


export class PatchApiKeyFromGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
