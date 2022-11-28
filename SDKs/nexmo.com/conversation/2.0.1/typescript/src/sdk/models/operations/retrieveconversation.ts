import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrieveConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class RetrieveConversation200ApplicationJsonMembers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: shared.Channel;

  @SpeakeasyMetadata({ data: "json, name=initiator" })
  initiator?: shared.Initiator;

  @SpeakeasyMetadata({ data: "json, name=member_id" })
  memberId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: shared.MemberStateEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: shared.TimestampResMember;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}


export class RetrieveConversation200ApplicationJsonProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: boolean;
}


// RetrieveConversation200ApplicationJson
/** 
 * Conversation Object
**/
export class RetrieveConversation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: shared.LinksConversation;

  @SpeakeasyMetadata({ data: "json, name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=members", elemType: RetrieveConversation200ApplicationJsonMembers })
  members?: RetrieveConversation200ApplicationJsonMembers[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=numbers" })
  numbers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: RetrieveConversation200ApplicationJsonProperties;

  @SpeakeasyMetadata({ data: "json, name=sequence_number" })
  sequenceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: shared.TimestampResConversation;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}


export class RetrieveConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveConversationPathParams;
}


export class RetrieveConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveConversation200ApplicationJsonObject?: RetrieveConversation200ApplicationJson;
}
