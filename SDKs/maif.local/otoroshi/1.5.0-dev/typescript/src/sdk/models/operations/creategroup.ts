import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class CreateGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Group;

  @Metadata()
  security: CreateGroupSecurity;
}


export class CreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
