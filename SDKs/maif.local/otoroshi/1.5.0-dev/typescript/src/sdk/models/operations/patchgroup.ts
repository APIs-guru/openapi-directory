import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceGroupId" })
  serviceGroupId: string;
}


export class PatchGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchGroupPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchGroupSecurity;
}


export class PatchGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
