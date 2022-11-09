import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SyncPlayCreateGroupRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  newGroupRequestDto?: shared.NewGroupRequestDto;

  @Metadata({ data: "request, media_type=application/json" })
  newGroupRequestDto1?: shared.NewGroupRequestDto;

  @Metadata({ data: "request, media_type=text/json" })
  newGroupRequestDto2?: shared.NewGroupRequestDto;
}


export class SyncPlayCreateGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayCreateGroupRequest extends SpeakeasyBase {
  @Metadata()
  request: SyncPlayCreateGroupRequests;

  @Metadata()
  security: SyncPlayCreateGroupSecurity;
}


export class SyncPlayCreateGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
