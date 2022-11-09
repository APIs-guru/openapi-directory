import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAndSearchMediaItemsOrderEnum {
    Ascending = "ascending"
,    Descending = "descending"
}


export class ListAndSearchMediaItemsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListAndSearchMediaItemsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_index" })
  pageIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: string;
}


export class ListAndSearchMediaItemsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAndSearchMediaItemsQueryParams;
}


// ListAndSearchMediaItems200ApplicationJsonEmbedded
/** 
 * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
**/
export class ListAndSearchMediaItems200ApplicationJsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=media", elemType: shared.Media })
  media?: shared.Media[];
}


export class ListAndSearchMediaItems200ApplicationJsonLinksFirst extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class ListAndSearchMediaItems200ApplicationJsonLinksLast extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class ListAndSearchMediaItems200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class ListAndSearchMediaItems200ApplicationJsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: ListAndSearchMediaItems200ApplicationJsonLinksFirst;

  @Metadata({ data: "json, name=last" })
  last?: ListAndSearchMediaItems200ApplicationJsonLinksLast;

  @Metadata({ data: "json, name=self" })
  self?: ListAndSearchMediaItems200ApplicationJsonLinksSelf;
}


export class ListAndSearchMediaItems200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: ListAndSearchMediaItems200ApplicationJsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: ListAndSearchMediaItems200ApplicationJsonLinks;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=page_index" })
  pageIndex?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class ListAndSearchMediaItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAndSearchMediaItems200ApplicationJsonObject?: ListAndSearchMediaItems200ApplicationJson;
}
