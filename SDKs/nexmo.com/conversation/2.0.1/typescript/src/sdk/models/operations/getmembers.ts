import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMembersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class GetMembersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMembersPathParams;
}


export class GetMembers200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=state" })
  state: shared.MemberStateEnum;

  @Metadata({ data: "json, name=user_id" })
  userId: string;

  @Metadata({ data: "json, name=user_name" })
  userName: string;
}


export class GetMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetMembers200ApplicationJson })
  getMembers200ApplicationJsonObjects?: GetMembers200ApplicationJson[];
}
