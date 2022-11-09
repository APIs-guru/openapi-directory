import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


// CreateMemberRequestBody
/** 
 * Create a Member in invite state 
**/
export class CreateMemberRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: shared.MemberActionEnum;

  @Metadata({ data: "json, name=channel" })
  channel: shared.Channel;

  @Metadata({ data: "json, name=knocking_id" })
  knockingId?: string;

  @Metadata({ data: "json, name=media" })
  media?: Map<string, any>;

  @Metadata({ data: "json, name=member_id" })
  memberId?: string;

  @Metadata({ data: "json, name=member_id_inviting" })
  memberIdInviting?: string;

  @Metadata({ data: "json, name=user_id" })
  userId: string;
}


export class CreateMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateMemberPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateMemberRequestBody;
}


export class CreateMember201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: shared.Channel;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initiator" })
  initiator?: shared.Initiator;

  @Metadata({ data: "json, name=state" })
  state?: shared.MemberStateEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: shared.TimestampResMember;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}


export class CreateMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createMember201ApplicationJsonObject?: CreateMember201ApplicationJson;
}
