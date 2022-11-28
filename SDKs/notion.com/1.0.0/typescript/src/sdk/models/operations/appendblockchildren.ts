import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppendBlockChildrenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppendBlockChildrenRequestBodyChildrenHeading2TextText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}


export class AppendBlockChildrenRequestBodyChildrenHeading2Text extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: AppendBlockChildrenRequestBodyChildrenHeading2TextText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AppendBlockChildrenRequestBodyChildrenHeading2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text", elemType: AppendBlockChildrenRequestBodyChildrenHeading2Text })
  text?: AppendBlockChildrenRequestBodyChildrenHeading2Text[];
}


export class AppendBlockChildrenRequestBodyChildren extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heading_2" })
  heading2?: AppendBlockChildrenRequestBodyChildrenHeading2;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class AppendBlockChildrenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=children", elemType: AppendBlockChildrenRequestBodyChildren })
  children?: AppendBlockChildrenRequestBodyChildren[];
}


export class AppendBlockChildren200ApplicationJsonChildPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class AppendBlockChildren200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=child_page" })
  childPage?: AppendBlockChildren200ApplicationJsonChildPage;

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
}


export class AppendBlockChildrenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppendBlockChildrenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppendBlockChildrenRequestBody;
}


export class AppendBlockChildrenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appendBlockChildren200ApplicationJsonObject?: AppendBlockChildren200ApplicationJson;
}
