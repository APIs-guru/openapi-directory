import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=member_id" })
  memberId: string;
}


export class GetMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMemberPathParams;
}


export class GetMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMember200ApplicationJsonAny?: any;
}
