import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;
}


export class UpdateMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateMemberPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class UpdateMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateMember200ApplicationJsonAny?: any;
}
