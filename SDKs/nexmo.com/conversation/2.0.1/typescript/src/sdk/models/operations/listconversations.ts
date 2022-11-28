import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListConversationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=record_index" })
  recordIndex?: number;
}


export class ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class ListConversations200ApplicationJsonEmbeddedConversationsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf;
}


export class ListConversations200ApplicationJsonEmbeddedConversations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ListConversations200ApplicationJsonEmbeddedConversationsLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}


// ListConversations200ApplicationJsonEmbedded
/** 
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
export class ListConversations200ApplicationJsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: ListConversations200ApplicationJsonEmbeddedConversations })
  conversations: ListConversations200ApplicationJsonEmbeddedConversations[];
}


export class ListConversations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded: ListConversations200ApplicationJsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: shared.LinksConversationsList;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=record_index" })
  recordIndex: number;
}


export class ListConversationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListConversationsQueryParams;
}


export class ListConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listConversations200ApplicationJsonObject?: ListConversations200ApplicationJson;
}
