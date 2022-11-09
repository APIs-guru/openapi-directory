import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrieveBlockChildrenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveBlockChildrenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;
}


export class RetrieveBlockChildrenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveBlockChildrenPathParams;

  @Metadata()
  queryParams: RetrieveBlockChildrenQueryParams;
}


export class RetrieveBlockChildren200ApplicationJsonResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime?: string;

  @Metadata({ data: "json, name=has_children" })
  hasChildren?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=unsupported" })
  unsupported?: Map<string, any>;
}


export class RetrieveBlockChildren200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=has_more" })
  hasMore?: boolean;

  @Metadata({ data: "json, name=next_cursor" })
  nextCursor?: any;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=results", elemType: operations.RetrieveBlockChildren200ApplicationJsonResults })
  results?: RetrieveBlockChildren200ApplicationJsonResults[];
}


export class RetrieveBlockChildrenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveBlockChildren200ApplicationJsonObject?: RetrieveBlockChildren200ApplicationJson;
}
