import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceGroupId" })
  serviceGroupId: string;
}


export class UpdateGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class UpdateGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Group;

  @Metadata()
  security: UpdateGroupSecurity;
}


export class UpdateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
