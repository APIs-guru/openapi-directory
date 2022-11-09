import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePagePropertiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdatePagePropertiesRequestBodyPropertiesStatusSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePagePropertiesRequestBodyPropertiesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=select" })
  select?: UpdatePagePropertiesRequestBodyPropertiesStatusSelect;
}


export class UpdatePagePropertiesRequestBodyProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: UpdatePagePropertiesRequestBodyPropertiesStatus;
}


export class UpdatePagePropertiesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: UpdatePagePropertiesRequestBodyProperties;
}


export class UpdatePagePropertiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdatePagePropertiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdatePagePropertiesRequestBody;
}


export class UpdatePageProperties200ApplicationJsonParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=database_id" })
  databaseId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=multi_select", elemType: operations.UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect })
  multiSelect?: UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=bold" })
  bold?: boolean;

  @Metadata({ data: "json, name=code" })
  code?: boolean;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=italic" })
  italic?: boolean;

  @Metadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @Metadata({ data: "json, name=underline" })
  underline?: boolean;
}


export class UpdatePageProperties200ApplicationJsonPropertiesNameTitleText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class UpdatePageProperties200ApplicationJsonPropertiesNameTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: UpdatePageProperties200ApplicationJsonPropertiesNameTitleText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title", elemType: operations.UpdatePageProperties200ApplicationJsonPropertiesNameTitle })
  title?: UpdatePageProperties200ApplicationJsonPropertiesNameTitle[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: any;

  @Metadata({ data: "json, name=start" })
  start?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkbox" })
  checkbox?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesScore5Select;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesStatusSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations extends SpeakeasyBase {
  @Metadata({ data: "json, name=bold" })
  bold?: boolean;

  @Metadata({ data: "json, name=code" })
  code?: boolean;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=italic" })
  italic?: boolean;

  @Metadata({ data: "json, name=strikethrough" })
  strikethrough?: boolean;

  @Metadata({ data: "json, name=underline" })
  underline?: boolean;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=rich_text", elemType: operations.UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText })
  richText?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdatePageProperties200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdatePageProperties200ApplicationJsonPropertiesTypeSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdatePageProperties200ApplicationJsonProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Author" })
  author?: UpdatePageProperties200ApplicationJsonPropertiesAuthor;

  @Metadata({ data: "json, name=Link" })
  link?: UpdatePageProperties200ApplicationJsonPropertiesLink;

  @Metadata({ data: "json, name=Name" })
  name?: UpdatePageProperties200ApplicationJsonPropertiesName;

  @Metadata({ data: "json, name=Publisher" })
  publisher?: UpdatePageProperties200ApplicationJsonPropertiesPublisher;

  @Metadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate;

  @Metadata({ data: "json, name=Read" })
  read?: UpdatePageProperties200ApplicationJsonPropertiesRead;

  @Metadata({ data: "json, name=Score /5" })
  score5?: UpdatePageProperties200ApplicationJsonPropertiesScore5;

  @Metadata({ data: "json, name=Status" })
  status?: UpdatePageProperties200ApplicationJsonPropertiesStatus;

  @Metadata({ data: "json, name=Summary" })
  summary?: UpdatePageProperties200ApplicationJsonPropertiesSummary;

  @Metadata({ data: "json, name=Type" })
  type?: UpdatePageProperties200ApplicationJsonPropertiesType;
}


export class UpdatePageProperties200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived" })
  archived?: boolean;

  @Metadata({ data: "json, name=created_time" })
  createdTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: UpdatePageProperties200ApplicationJsonParent;

  @Metadata({ data: "json, name=properties" })
  properties?: UpdatePageProperties200ApplicationJsonProperties;
}


export class UpdatePagePropertiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updatePageProperties200ApplicationJsonObject?: UpdatePageProperties200ApplicationJson;
}
