import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeyFromGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ApiKeyFromGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeyFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiKeyFromGroupPathParams;

  @SpeakeasyMetadata()
  security: ApiKeyFromGroupSecurity;
}


export class ApiKeyFromGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiKey?: shared.ApiKey;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
