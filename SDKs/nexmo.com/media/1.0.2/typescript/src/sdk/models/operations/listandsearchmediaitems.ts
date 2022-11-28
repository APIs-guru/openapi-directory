import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAndSearchMediaItemsOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}


export class ListAndSearchMediaItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ListAndSearchMediaItemsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_index" })
  pageIndex?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" })
  startTime?: string;
}


// ListAndSearchMediaItems200ApplicationJsonEmbedded
/** 
 * A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
**/
export class ListAndSearchMediaItems200ApplicationJsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=media", elemType: shared.Media })
  media?: shared.Media[];
}


export class ListAndSearchMediaItems200ApplicationJsonLinksFirst extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class ListAndSearchMediaItems200ApplicationJsonLinksLast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class ListAndSearchMediaItems200ApplicationJsonLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class ListAndSearchMediaItems200ApplicationJsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first?: ListAndSearchMediaItems200ApplicationJsonLinksFirst;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last?: ListAndSearchMediaItems200ApplicationJsonLinksLast;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: ListAndSearchMediaItems200ApplicationJsonLinksSelf;
}


export class ListAndSearchMediaItems200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: ListAndSearchMediaItems200ApplicationJsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: ListAndSearchMediaItems200ApplicationJsonLinks;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=page_index" })
  pageIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}


export class ListAndSearchMediaItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAndSearchMediaItemsQueryParams;
}


export class ListAndSearchMediaItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAndSearchMediaItems200ApplicationJsonObject?: ListAndSearchMediaItems200ApplicationJson;
}
