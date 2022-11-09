import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListConversationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_end" })
  dateEnd?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_start" })
  dateStart?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=record_index" })
  recordIndex?: number;
}


export class ListConversationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListConversationsQueryParams;
}


export class ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class ListConversations200ApplicationJsonEmbeddedConversationsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: ListConversations200ApplicationJsonEmbeddedConversationsLinksSelf;
}


export class ListConversations200ApplicationJsonEmbeddedConversations extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: ListConversations200ApplicationJsonEmbeddedConversationsLinks;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}


// ListConversations200ApplicationJsonEmbedded
/** 
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
export class ListConversations200ApplicationJsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: operations.ListConversations200ApplicationJsonEmbeddedConversations })
  conversations: ListConversations200ApplicationJsonEmbeddedConversations[];
}


export class ListConversations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded: ListConversations200ApplicationJsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links: shared.LinksConversationsList;

  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize: number;

  @Metadata({ data: "json, name=record_index" })
  recordIndex: number;
}


export class ListConversationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listConversations200ApplicationJsonObject?: ListConversations200ApplicationJson;
}
