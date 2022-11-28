import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiKeyGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: string;
}


export class ApiKeyGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class ApiKeyGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApiKeyGroupPathParams;

  @SpeakeasyMetadata()
  security: ApiKeyGroupSecurity;
}


export class ApiKeyGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}
