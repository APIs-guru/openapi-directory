import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveADatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multi_select" })
  multiSelect?: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: Map<string, any>;
}


export class RetrieveADatabase200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkbox" })
  checkbox?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesScore5Select;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesStatusSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesTypeSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: RetrieveADatabase200ApplicationJsonPropertiesAuthor;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: RetrieveADatabase200ApplicationJsonPropertiesLink;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: RetrieveADatabase200ApplicationJsonPropertiesName;

  @SpeakeasyMetadata({ data: "json, name=Publisher" })
  publisher?: RetrieveADatabase200ApplicationJsonPropertiesPublisher;

  @SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate;

  @SpeakeasyMetadata({ data: "json, name=Read" })
  read?: RetrieveADatabase200ApplicationJsonPropertiesRead;

  @SpeakeasyMetadata({ data: "json, name=Score /5" })
  score5?: RetrieveADatabase200ApplicationJsonPropertiesScore5;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RetrieveADatabase200ApplicationJsonPropertiesStatus;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: RetrieveADatabase200ApplicationJsonPropertiesSummary;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RetrieveADatabase200ApplicationJsonPropertiesType;
}


export class RetrieveADatabase200ApplicationJsonTitleAnnotations extends SpeakeasyBase {
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


export class RetrieveADatabase200ApplicationJsonTitleText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveADatabase200ApplicationJsonTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: RetrieveADatabase200ApplicationJsonTitleAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: RetrieveADatabase200ApplicationJsonTitleText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: RetrieveADatabase200ApplicationJsonProperties;

  @SpeakeasyMetadata({ data: "json, name=title", elemType: RetrieveADatabase200ApplicationJsonTitle })
  title?: RetrieveADatabase200ApplicationJsonTitle[];
}


export class RetrieveADatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveADatabasePathParams;
}


export class RetrieveADatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveADatabase200ApplicationJsonObject?: RetrieveADatabase200ApplicationJson;
}
