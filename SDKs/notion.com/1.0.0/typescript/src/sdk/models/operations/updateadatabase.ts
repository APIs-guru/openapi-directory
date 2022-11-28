import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateADatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateADatabaseRequestBodyPropertiesWinePairing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rich_text" })
  richText?: Map<string, any>;
}


export class UpdateADatabaseRequestBodyProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Wine Pairing" })
  winePairing?: UpdateADatabaseRequestBodyPropertiesWinePairing;
}


export class UpdateADatabaseRequestBodyTitleText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}


export class UpdateADatabaseRequestBodyTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: UpdateADatabaseRequestBodyTitleText;
}


export class UpdateADatabaseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: UpdateADatabaseRequestBodyProperties;

  @SpeakeasyMetadata({ data: "json, name=title", elemType: UpdateADatabaseRequestBodyTitle })
  title?: UpdateADatabaseRequestBodyTitle[];
}


export class UpdateADatabase200ApplicationJsonParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page_id" })
  pageId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multi_select" })
  multiSelect?: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: Map<string, any>;
}


export class UpdateADatabase200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesPublisherSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkbox" })
  checkbox?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesScore5Select;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesStatusSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rich_text" })
  richText?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions })
  options?: UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions[];
}


export class UpdateADatabase200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: UpdateADatabase200ApplicationJsonPropertiesTypeSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesWinePairing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rich_text" })
  richText?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonPropertiesDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJsonProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: UpdateADatabase200ApplicationJsonPropertiesAuthor;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: UpdateADatabase200ApplicationJsonPropertiesLink;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: UpdateADatabase200ApplicationJsonPropertiesName;

  @SpeakeasyMetadata({ data: "json, name=Publisher" })
  publisher?: UpdateADatabase200ApplicationJsonPropertiesPublisher;

  @SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate;

  @SpeakeasyMetadata({ data: "json, name=Read" })
  read?: UpdateADatabase200ApplicationJsonPropertiesRead;

  @SpeakeasyMetadata({ data: "json, name=Score /5" })
  score5?: UpdateADatabase200ApplicationJsonPropertiesScore5;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: UpdateADatabase200ApplicationJsonPropertiesStatus;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: UpdateADatabase200ApplicationJsonPropertiesSummary;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: UpdateADatabase200ApplicationJsonPropertiesType;

  @SpeakeasyMetadata({ data: "json, name=Wine Pairing" })
  winePairing?: UpdateADatabase200ApplicationJsonPropertiesWinePairing;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: UpdateADatabase200ApplicationJsonPropertiesDate;
}


export class UpdateADatabase200ApplicationJsonTitleAnnotations extends SpeakeasyBase {
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


export class UpdateADatabase200ApplicationJsonTitleText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class UpdateADatabase200ApplicationJsonTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: UpdateADatabase200ApplicationJsonTitleAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: UpdateADatabase200ApplicationJsonTitleText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class UpdateADatabase200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: UpdateADatabase200ApplicationJsonParent;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: UpdateADatabase200ApplicationJsonProperties;

  @SpeakeasyMetadata({ data: "json, name=title", elemType: UpdateADatabase200ApplicationJsonTitle })
  title?: UpdateADatabase200ApplicationJsonTitle[];
}


export class UpdateADatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateADatabasePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateADatabaseRequestBody;
}


export class UpdateADatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateADatabase200ApplicationJsonObject?: UpdateADatabase200ApplicationJson;
}
