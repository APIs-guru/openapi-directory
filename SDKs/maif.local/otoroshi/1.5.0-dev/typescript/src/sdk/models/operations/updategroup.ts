import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceGroupId" })
  serviceGroupId: string;
}


export class UpdateGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Group;

  @SpeakeasyMetadata()
  security: UpdateGroupSecurity;
}


export class UpdateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}
