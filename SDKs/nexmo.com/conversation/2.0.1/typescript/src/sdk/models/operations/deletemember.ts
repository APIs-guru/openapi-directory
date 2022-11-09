import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;
}


export class DeleteMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMemberPathParams;
}


export class DeleteMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteMember200ApplicationJsonObject?: Map<string, any>;
}
