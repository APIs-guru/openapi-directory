import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiKeysFromGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;
}


export class ApiKeysFromGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeysFromGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApiKeysFromGroupPathParams;

  @Metadata()
  security: ApiKeysFromGroupSecurity;
}


export class ApiKeysFromGroupResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ApiKey })
  apiKeys?: shared.ApiKey[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
