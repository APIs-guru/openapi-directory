import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryADatabasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class QueryADatabaseRequestBodyFilterOrSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=equals" })
  equals?: string;
}


export class QueryADatabaseRequestBodyFilterOr extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: QueryADatabaseRequestBodyFilterOrSelect;
}


export class QueryADatabaseRequestBodyFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=or", elemType: QueryADatabaseRequestBodyFilterOr })
  or?: QueryADatabaseRequestBodyFilterOr[];
}


export class QueryADatabaseRequestBodySorts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;
}


export class QueryADatabaseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: QueryADatabaseRequestBodyFilter;

  @SpeakeasyMetadata({ data: "json, name=sorts", elemType: QueryADatabaseRequestBodySorts })
  sorts?: QueryADatabaseRequestBodySorts[];
}


export class QueryADatabase200ApplicationJsonResultsParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_id" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multi_select", elemType: QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect })
  multiSelect?: QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations extends SpeakeasyBase {
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


export class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesNameTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title", elemType: QueryADatabase200ApplicationJsonResultsPropertiesNameTitle })
  title?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitle[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublisher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: any;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkbox" })
  checkbox?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesScore5Select extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesScore5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesScore5Select;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: any[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class QueryADatabase200ApplicationJsonResultsPropertiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class QueryADatabase200ApplicationJsonResultsProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: QueryADatabase200ApplicationJsonResultsPropertiesAuthor;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: QueryADatabase200ApplicationJsonResultsPropertiesLink;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: QueryADatabase200ApplicationJsonResultsPropertiesName;

  @SpeakeasyMetadata({ data: "json, name=Publisher" })
  publisher?: QueryADatabase200ApplicationJsonResultsPropertiesPublisher;

  @SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate;

  @SpeakeasyMetadata({ data: "json, name=Read" })
  read?: QueryADatabase200ApplicationJsonResultsPropertiesRead;

  @SpeakeasyMetadata({ data: "json, name=Score /5" })
  score5?: QueryADatabase200ApplicationJsonResultsPropertiesScore5;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: QueryADatabase200ApplicationJsonResultsPropertiesStatus;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: QueryADatabase200ApplicationJsonResultsPropertiesSummary;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: QueryADatabase200ApplicationJsonResultsPropertiesType;
}


export class QueryADatabase200ApplicationJsonResults extends SpeakeasyBase {
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
  parent?: QueryADatabase200ApplicationJsonResultsParent;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: QueryADatabase200ApplicationJsonResultsProperties;
}


export class QueryADatabase200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=has_more" })
  hasMore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=next_cursor" })
  nextCursor?: any;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: QueryADatabase200ApplicationJsonResults })
  results?: QueryADatabase200ApplicationJsonResults[];
}


export class QueryADatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: QueryADatabasePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: QueryADatabaseRequestBody;
}


export class QueryADatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  queryADatabase200ApplicationJsonObject?: QueryADatabase200ApplicationJson;
}
