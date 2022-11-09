import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetuserConversationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetuserConversationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetuserConversationsPathParams;
}


export class GetuserConversations200ApplicationJsonTimestamp extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: string;
}


export class GetuserConversations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @Metadata({ data: "json, name=member_id" })
  memberId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sequence_number" })
  sequenceNumber?: number;

  @Metadata({ data: "json, name=state" })
  state?: shared.MemberStateEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: GetuserConversations200ApplicationJsonTimestamp;
}


export class GetuserConversationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.GetuserConversations200ApplicationJson })
  getuserConversations200ApplicationJsonObjects?: GetuserConversations200ApplicationJson[];
}
