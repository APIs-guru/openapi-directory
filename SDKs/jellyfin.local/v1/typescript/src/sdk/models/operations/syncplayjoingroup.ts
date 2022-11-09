import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayJoinGroupRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  joinGroupRequestDto?: shared.JoinGroupRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  joinGroupRequestDto1?: shared.JoinGroupRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  joinGroupRequestDto2?: shared.JoinGroupRequestDto;
}


export class SyncPlayJoinGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayJoinGroupRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayJoinGroupRequests;

  @Metadata()
  security: SyncPlayJoinGroupSecurity;
}


export class SyncPlayJoinGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
