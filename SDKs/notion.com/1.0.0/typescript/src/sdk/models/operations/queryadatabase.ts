import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryADatabasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class QueryADatabaseRequestBodyFilterOrSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=equals" })
  equals?: string;
}


export class QueryADatabaseRequestBodyFilterOr extends SpeakeasyBase {
  @Metadata({ data: "json, name=property" })
  property?: string;

  @Metadata({ data: "json, name=select" })
  select?: QueryADatabaseRequestBodyFilterOrSelect;
}


export class QueryADatabaseRequestBodyFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=or", elemType: operations.QueryADatabaseRequestBodyFilterOr })
  or?: QueryADatabaseRequestBodyFilterOr[];
}


export class QueryADatabaseRequestBodySorts extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=property" })
  property?: string;
}


export class QueryADatabaseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: QueryADatabaseRequestBodyFilter;

  @Metadata({ data: "json, name=sorts", elemType: operations.QueryADatabaseRequestBodySorts })
  sorts?: QueryADatabaseRequestBodySorts[];
}


export class QueryADatabaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: QueryADatabasePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: QueryADatabaseRequestBody;
}


export class QueryADatabase200ApplicationJsonResultsParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=database_id" })
  databaseId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=multi_select", elemType: operations.QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect })
  multiSelect?: QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations extends SpeakeasyBase {
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


export class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesNameTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesName extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title", elemType: operations.QueryADatabase200ApplicationJsonResultsPropertiesNameTitle })
  title?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitle[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublisher extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: any;

  @Metadata({ data: "json, name=start" })
  start?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkbox" })
  checkbox?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesScore5Select extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesScore5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesScore5Select;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=text" })
  text?: any[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Author" })
  author?: QueryADatabase200ApplicationJsonResultsPropertiesAuthor;

  @Metadata({ data: "json, name=Link" })
  link?: QueryADatabase200ApplicationJsonResultsPropertiesLink;

  @Metadata({ data: "json, name=Name" })
  name?: QueryADatabase200ApplicationJsonResultsPropertiesName;

  @Metadata({ data: "json, name=Publisher" })
  publisher?: QueryADatabase200ApplicationJsonResultsPropertiesPublisher;

  @Metadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate;

  @Metadata({ data: "json, name=Read" })
  read?: QueryADatabase200ApplicationJsonResultsPropertiesRead;

  @Metadata({ data: "json, name=Score /5" })
  score5?: QueryADatabase200ApplicationJsonResultsPropertiesScore5;

  @Metadata({ data: "json, name=Status" })
  status?: QueryADatabase200ApplicationJsonResultsPropertiesStatus;

  @Metadata({ data: "json, name=Summary" })
  summary?: QueryADatabase200ApplicationJsonResultsPropertiesSummary;

  @Metadata({ data: "json, name=Type" })
  type?: QueryADatabase200ApplicationJsonResultsPropertiesType;
}


export class QueryADatabase200ApplicationJsonResults extends SpeakeasyBase {
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
  parent?: QueryADatabase200ApplicationJsonResultsParent;

  @Metadata({ data: "json, name=properties" })
  properties?: QueryADatabase200ApplicationJsonResultsProperties;
}


export class QueryADatabase200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=has_more" })
  hasMore?: boolean;

  @Metadata({ data: "json, name=next_cursor" })
  nextCursor?: any;

  @Metadata({ data: "json, name=object" })
  object?: string;

  @Metadata({ data: "json, name=results", elemType: operations.QueryADatabase200ApplicationJsonResults })
  results?: QueryADatabase200ApplicationJsonResults[];
}


export class QueryADatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  queryADatabase200ApplicationJsonObject?: QueryADatabase200ApplicationJson;
}
