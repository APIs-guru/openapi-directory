import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveBlockChildrenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveBlockChildrenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;
}


export class RetrieveBlockChildren200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=has_children" })
  hasChildren?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=unsupported" })
  unsupported?: Map<string, any>;
}


export class RetrieveBlockChildren200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has_more" })
  hasMore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_cursor" })
  nextCursor?: any;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: RetrieveBlockChildren200ApplicationJsonResults })
  results?: RetrieveBlockChildren200ApplicationJsonResults[];
}


export class RetrieveBlockChildrenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveBlockChildrenPathParams;

  @SpeakeasyMetadata()
  queryParams: RetrieveBlockChildrenQueryParams;
}


export class RetrieveBlockChildrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveBlockChildren200ApplicationJsonObject?: RetrieveBlockChildren200ApplicationJson;
}
