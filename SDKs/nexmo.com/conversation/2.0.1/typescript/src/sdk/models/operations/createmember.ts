import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


// CreateMemberRequestBody
/** 
 * Create a Member in invite state 
**/
export class CreateMemberRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: shared.MemberActionEnum;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: shared.Channel;

  @SpeakeasyMetadata({ data: "json, name=knocking_id" })
  knockingId?: string;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=member_id" })
  memberId?: string;

  @SpeakeasyMetadata({ data: "json, name=member_id_inviting" })
  memberIdInviting?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;
}


export class CreateMember201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: shared.Channel;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initiator" })
  initiator?: shared.Initiator;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: shared.MemberStateEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: shared.TimestampResMember;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


export class CreateMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateMemberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateMemberRequestBody;
}


export class CreateMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createMember201ApplicationJsonObject?: CreateMember201ApplicationJson;
}
