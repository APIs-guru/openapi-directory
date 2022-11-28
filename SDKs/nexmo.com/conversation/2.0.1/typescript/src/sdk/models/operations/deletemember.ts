import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;
}


export class DeleteMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMemberPathParams;
}


export class DeleteMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteMember200ApplicationJsonObject?: Map<string, any>;
}
