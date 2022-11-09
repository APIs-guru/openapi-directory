import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;
}


export class GetMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMemberPathParams;
}


export class GetMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMember200ApplicationJsonAny?: any;
}
