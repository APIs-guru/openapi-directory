import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListLegs200ApplicationJsonEmbeddedLegs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=conversation_uuid" })
  conversationUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=start_end" })
  startEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: shared.LegStateEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: shared.ChannelTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}


// ListLegs200ApplicationJsonEmbedded
/** 
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
export class ListLegs200ApplicationJsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=legs", elemType: ListLegs200ApplicationJsonEmbeddedLegs })
  legs: ListLegs200ApplicationJsonEmbeddedLegs[];
}


export class ListLegs200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class ListLegs200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: ListLegs200ApplicationJsonLinksSelf;
}


// ListLegs200ApplicationJson
/** 
 * List Legs Response Payload Object
**/
export class ListLegs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded: ListLegs200ApplicationJsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: ListLegs200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=record_index" })
  recordIndex: number;
}


export class ListLegsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listLegs200ApplicationJsonObject?: ListLegs200ApplicationJson;
}
