import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateADatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateADatabaseRequestBodyPropertiesWinePairing extends SpeakeasyBase {
  @Metadata({ data: "json, name=rich_text" })
  richText?: Map<string, any>;
}


export class UpdateADatabaseRequestBodyProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Wine Pairing" })
  winePairing?: UpdateADatabaseRequestBodyPropertiesWinePairing;
}


export class UpdateADatabaseRequestBodyTitleText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;
}


export class UpdateADatabaseRequestBodyTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: UpdateADatabaseRequestBodyTitleText;
}


export class UpdateADatabaseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=properties" })
  properties?: UpdateADatabaseRequestBodyProperties;

  @Metadata({ data: "json, name=title", elemType: operations.UpdateADatabaseRequestBodyTitle })
  title?: UpdateADatabaseRequestBodyTitle[];
}


export class UpdateADatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateADatabasePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateADatabaseRequestBody;
}


export class UpdateADatabase200ApplicationJsonParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=page_id" })
  pageId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=multi_select" })
  multiSelect?: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: Map<string, any>;
}


export class UpdateADatabase200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=title" })
  title?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesPublisherSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkbox" })
  checkbox?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesScore5Select;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesStatusSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rich_text" })
  richText?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesTypeSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesWinePairing extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rich_text" })
  richText?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Author" })
  author?: UpdateADatabase200ApplicationJsonPropertiesAuthor;

  @Metadata({ data: "json, name=Link" })
  link?: UpdateADatabase200ApplicationJsonPropertiesLink;

  @Metadata({ data: "json, name=Name" })
  name?: UpdateADatabase200ApplicationJsonPropertiesName;

  @Metadata({ data: "json, name=Publisher" })
  publisher?: UpdateADatabase200ApplicationJsonPropertiesPublisher;

  @Metadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate;

  @Metadata({ data: "json, name=Read" })
  read?: UpdateADatabase200ApplicationJsonPropertiesRead;

  @Metadata({ data: "json, name=Score /5" })
  score5?: UpdateADatabase200ApplicationJsonPropertiesScore5;

  @Metadata({ data: "json, name=Status" })
  status?: UpdateADatabase200ApplicationJsonPropertiesStatus;

  @Metadata({ data: "json, name=Summary" })
  summary?: UpdateADatabase200ApplicationJsonPropertiesSummary;

  @Metadata({ data: "json, name=Type" })
  type?: UpdateADatabase200ApplicationJsonPropertiesType;

  @Metadata({ data: "json, name=Wine Pairing" })
  winePairing?: UpdateADatabase200ApplicationJsonPropertiesWinePairing;

  @Metadata({ data: "json, name=date" })
  date?: UpdateADatabase200ApplicationJsonPropertiesDate;
}


export class UpdateADatabase200ApplicationJsonTitleAnnotations extends SpeakeasyBase {
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


export class UpdateADatabase200ApplicationJsonTitleText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class UpdateADatabase200ApplicationJsonTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: UpdateADatabase200ApplicationJsonTitleAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: UpdateADatabase200ApplicationJsonTitleText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: UpdateADatabase200ApplicationJsonParent;

  @Metadata({ data: "json, name=properties" })
  properties?: UpdateADatabase200ApplicationJsonProperties;

  @Metadata({ data: "json, name=title", elemType: operations.UpdateADatabase200ApplicationJsonTitle })
  title?: UpdateADatabase200ApplicationJsonTitle[];
}


export class UpdateADatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateADatabase200ApplicationJsonObject?: UpdateADatabase200ApplicationJson;
}
