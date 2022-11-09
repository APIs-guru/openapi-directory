import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;
}


export class UpdateMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateMemberPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UpdateMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateMember200ApplicationJsonAny?: any;
}
