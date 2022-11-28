import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetuserConversationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class GetuserConversations200ApplicationJsonTimestamp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;
}


export class GetuserConversations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=image_url" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=member_id" })
  memberId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sequence_number" })
  sequenceNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: shared.MemberStateEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: GetuserConversations200ApplicationJsonTimestamp;
}


export class GetuserConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetuserConversationsPathParams;
}


export class GetuserConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetuserConversations200ApplicationJson })
  getuserConversations200ApplicationJsonObjects?: GetuserConversations200ApplicationJson[];
}
