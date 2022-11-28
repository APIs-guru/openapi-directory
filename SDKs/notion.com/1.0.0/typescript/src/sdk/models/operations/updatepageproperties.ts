import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePagePropertiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdatePagePropertiesRequestBodyPropertiesStatusSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePagePropertiesRequestBodyPropertiesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdatePagePropertiesRequestBodyPropertiesStatusSelect;
}


export class UpdatePagePropertiesRequestBodyProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UpdatePagePropertiesRequestBodyPropertiesStatus;
}


export class UpdatePagePropertiesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: UpdatePagePropertiesRequestBodyProperties;
}


export class UpdatePageProperties200ApplicationJsonParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_id" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multi_select", elemType: UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect })
  multiSelect?: UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bold" })
  bold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=italic" })
  italic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=underline" })
  underline?: boolean;
}


export class UpdatePageProperties200ApplicationJsonPropertiesNameTitleText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class UpdatePageProperties200ApplicationJsonPropertiesNameTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: UpdatePageProperties200ApplicationJsonPropertiesNameTitleText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title", elemType: UpdatePageProperties200ApplicationJsonPropertiesNameTitle })
  title?: UpdatePageProperties200ApplicationJsonPropertiesNameTitle[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: any;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkbox" })
  checkbox?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesScore5Select;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesStatusSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bold" })
  bold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=italic" })
  italic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @SpeakeasyMetadata({ data: "json, name=underline" })
  underline?: boolean;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=rich_text", elemType: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText })
  richText?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesTypeSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: UpdatePageProperties200ApplicationJsonPropertiesAuthor;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: UpdatePageProperties200ApplicationJsonPropertiesLink;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: UpdatePageProperties200ApplicationJsonPropertiesName;

  @SpeakeasyMetadata({ data: "json, name=Publisher" })
  publisher?: UpdatePageProperties200ApplicationJsonPropertiesPublisher;

  @SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate;

  @SpeakeasyMetadata({ data: "json, name=Read" })
  read?: UpdatePageProperties200ApplicationJsonPropertiesRead;

  @SpeakeasyMetadata({ data: "json, name=Score /5" })
  score5?: UpdatePageProperties200ApplicationJsonPropertiesScore5;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UpdatePageProperties200ApplicationJsonPropertiesStatus;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: UpdatePageProperties200ApplicationJsonPropertiesSummary;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: UpdatePageProperties200ApplicationJsonPropertiesType;
}


export class UpdatePageProperties200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: UpdatePageProperties200ApplicationJsonParent;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: UpdatePageProperties200ApplicationJsonProperties;
}


export class UpdatePagePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePagePropertiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdatePagePropertiesRequestBody;
}


export class UpdatePagePropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updatePageProperties200ApplicationJsonObject?: UpdatePageProperties200ApplicationJson;
}
