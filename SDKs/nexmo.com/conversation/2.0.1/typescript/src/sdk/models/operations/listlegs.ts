import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListLegs200ApplicationJsonEmbeddedLegs extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: Map<string, any>;

  @Metadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=conversation_uuid" })
  conversationUuid?: string;

  @Metadata({ data: "json, name=from" })
  from?: Map<string, any>;

  @Metadata({ data: "json, name=start_end" })
  startEnd?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: shared.LegStateEnum;

  @Metadata({ data: "json, name=to" })
  to?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: shared.ChannelTypeEnum;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}


// ListLegs200ApplicationJsonEmbedded
/** 
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
export class ListLegs200ApplicationJsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=legs", elemType: operations.ListLegs200ApplicationJsonEmbeddedLegs })
  legs: ListLegs200ApplicationJsonEmbeddedLegs[];
}


export class ListLegs200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class ListLegs200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: ListLegs200ApplicationJsonLinksSelf;
}


// ListLegs200ApplicationJson
/** 
 * List Legs Response Payload Object
**/
export class ListLegs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded: ListLegs200ApplicationJsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links: ListLegs200ApplicationJsonLinks;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize: number;

  @Metadata({ data: "json, name=record_index" })
  recordIndex: number;
}


export class ListLegsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listLegs200ApplicationJsonObject?: ListLegs200ApplicationJson;
}
