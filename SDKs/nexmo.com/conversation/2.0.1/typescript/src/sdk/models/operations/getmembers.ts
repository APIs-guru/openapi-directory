import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMembersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class GetMembers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: shared.MemberStateEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName: string;
}


export class GetMembersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMembersPathParams;
}


export class GetMembersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetMembers200ApplicationJson })
  getMembers200ApplicationJsonObjects?: GetMembers200ApplicationJson[];
}
