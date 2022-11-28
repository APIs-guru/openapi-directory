import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeysFromGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ApiKeysFromGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeysFromGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiKeysFromGroupPathParams;

  @SpeakeasyMetadata()
  security: ApiKeysFromGroupSecurity;
}


export class ApiKeysFromGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
