import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayJoinGroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  joinGroupRequestDto?: shared.JoinGroupRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  joinGroupRequestDto1?: shared.JoinGroupRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  joinGroupRequestDto2?: shared.JoinGroupRequestDto;
}


export class SyncPlayJoinGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayJoinGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayJoinGroupRequests;

  @SpeakeasyMetadata()
  security: SyncPlayJoinGroupSecurity;
}


export class SyncPlayJoinGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
