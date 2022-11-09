import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" })
  conversationId: string;
}


export class RetrieveConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveConversationPathParams;
}


export class RetrieveConversation200ApplicationJsonMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: shared.Channel;

  @Metadata({ data: "json, name=initiator" })
  initiator?: shared.Initiator;

  @Metadata({ data: "json, name=member_id" })
  memberId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: shared.MemberStateEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: shared.TimestampResMember;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}


export class RetrieveConversation200ApplicationJsonProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=video" })
  video?: boolean;
}


// RetrieveConversation200ApplicationJson
/** 
 * Conversation Object
**/
export class RetrieveConversation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: shared.LinksConversation;

  @Metadata({ data: "json, name=api_key" })
  apiKey?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=members", elemType: operations.RetrieveConversation200ApplicationJsonMembers })
  members?: RetrieveConversation200ApplicationJsonMembers[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=numbers" })
  numbers?: Map<string, any>;

  @Metadata({ data: "json, name=properties" })
  properties?: RetrieveConversation200ApplicationJsonProperties;

  @Metadata({ data: "json, name=sequence_number" })
  sequenceNumber?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: shared.TimestampResConversation;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}


export class RetrieveConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveConversation200ApplicationJsonObject?: RetrieveConversation200ApplicationJson;
}
