import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppendBlockChildrenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppendBlockChildrenRequestBodyChildrenHeading2TextText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;
}


export class AppendBlockChildrenRequestBodyChildrenHeading2Text extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: AppendBlockChildrenRequestBodyChildrenHeading2TextText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AppendBlockChildrenRequestBodyChildrenHeading2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=text", elemType: operations.AppendBlockChildrenRequestBodyChildrenHeading2Text })
  text?: AppendBlockChildrenRequestBodyChildrenHeading2Text[];
}


export class AppendBlockChildrenRequestBodyChildren extends SpeakeasyBase {
  @Metadata({ data: "json, name=heading_2" })
  heading2?: AppendBlockChildrenRequestBodyChildrenHeading2;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class AppendBlockChildrenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=children", elemType: operations.AppendBlockChildrenRequestBodyChildren })
  children?: AppendBlockChildrenRequestBodyChildren[];
}


export class AppendBlockChildrenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppendBlockChildrenPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppendBlockChildrenRequestBody;
}


export class AppendBlockChildren200ApplicationJsonChildPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class AppendBlockChildren200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=child_page" })
  childPage?: AppendBlockChildren200ApplicationJsonChildPage;

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
}


export class AppendBlockChildrenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  appendBlockChildren200ApplicationJsonObject?: AppendBlockChildren200ApplicationJson;
}
