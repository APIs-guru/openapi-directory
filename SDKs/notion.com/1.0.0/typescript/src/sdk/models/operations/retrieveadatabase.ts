import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrieveADatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveADatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveADatabasePathParams;
}


export class RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=multi_select" })
  multiSelect?: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: Map<string, any>;
}


export class RetrieveADatabase200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title" })
  title?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkbox" })
  checkbox?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesScore5Select;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesStatusSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=text" })
  text?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveADatabase200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=options", elemType: operations.RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions })
  options?: RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions[];
}


export class RetrieveADatabase200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: RetrieveADatabase200ApplicationJsonPropertiesTypeSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJsonProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Author" })
  author?: RetrieveADatabase200ApplicationJsonPropertiesAuthor;

  @Metadata({ data: "json, name=Link" })
  link?: RetrieveADatabase200ApplicationJsonPropertiesLink;

  @Metadata({ data: "json, name=Name" })
  name?: RetrieveADatabase200ApplicationJsonPropertiesName;

  @Metadata({ data: "json, name=Publisher" })
  publisher?: RetrieveADatabase200ApplicationJsonPropertiesPublisher;

  @Metadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate;

  @Metadata({ data: "json, name=Read" })
  read?: RetrieveADatabase200ApplicationJsonPropertiesRead;

  @Metadata({ data: "json, name=Score /5" })
  score5?: RetrieveADatabase200ApplicationJsonPropertiesScore5;

  @Metadata({ data: "json, name=Status" })
  status?: RetrieveADatabase200ApplicationJsonPropertiesStatus;

  @Metadata({ data: "json, name=Summary" })
  summary?: RetrieveADatabase200ApplicationJsonPropertiesSummary;

  @Metadata({ data: "json, name=Type" })
  type?: RetrieveADatabase200ApplicationJsonPropertiesType;
}


export class RetrieveADatabase200ApplicationJsonTitleAnnotations extends SpeakeasyBase {
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


export class RetrieveADatabase200ApplicationJsonTitleText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveADatabase200ApplicationJsonTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: RetrieveADatabase200ApplicationJsonTitleAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: RetrieveADatabase200ApplicationJsonTitleText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveADatabase200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_time" })
  createdTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_edited_time" })
  lastEditedTime?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: RetrieveADatabase200ApplicationJsonProperties;

  @Metadata({ data: "json, name=title", elemType: operations.RetrieveADatabase200ApplicationJsonTitle })
  title?: RetrieveADatabase200ApplicationJsonTitle[];
}


export class RetrieveADatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveADatabase200ApplicationJsonObject?: RetrieveADatabase200ApplicationJson;
}
