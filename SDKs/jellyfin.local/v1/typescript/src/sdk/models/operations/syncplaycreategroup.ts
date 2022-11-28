import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SyncPlayCreateGroupRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  newGroupRequestDto?: shared.NewGroupRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  newGroupRequestDto1?: shared.NewGroupRequestDto;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  newGroupRequestDto2?: shared.NewGroupRequestDto;
}


export class SyncPlayCreateGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class SyncPlayCreateGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SyncPlayCreateGroupRequests;

  @SpeakeasyMetadata()
  security: SyncPlayCreateGroupSecurity;
}


export class SyncPlayCreateGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
