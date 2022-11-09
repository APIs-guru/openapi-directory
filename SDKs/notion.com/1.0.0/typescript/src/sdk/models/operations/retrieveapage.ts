import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RetrieveAPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveAPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveAPagePathParams;
}


export class RetrieveAPage200ApplicationJsonParent extends SpeakeasyBase {
  @Metadata({ data: "json, name=database_id" })
  databaseId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=multi_select", elemType: operations.RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect })
  multiSelect?: RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations extends SpeakeasyBase {
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


export class RetrieveAPage200ApplicationJsonPropertiesNameTitleText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveAPage200ApplicationJsonPropertiesNameTitle extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: RetrieveAPage200ApplicationJsonPropertiesNameTitleText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title", elemType: operations.RetrieveAPage200ApplicationJsonPropertiesNameTitle })
  title?: RetrieveAPage200ApplicationJsonPropertiesNameTitle[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: RetrieveAPage200ApplicationJsonPropertiesPublisherSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: any;

  @Metadata({ data: "json, name=start" })
  start?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkbox" })
  checkbox?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: RetrieveAPage200ApplicationJsonPropertiesStatusSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations extends SpeakeasyBase {
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


export class RetrieveAPage200ApplicationJsonPropertiesSummaryTextText extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveAPage200ApplicationJsonPropertiesSummaryText extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations;

  @Metadata({ data: "json, name=href" })
  href?: any;

  @Metadata({ data: "json, name=plain_text" })
  plainText?: string;

  @Metadata({ data: "json, name=text" })
  text?: RetrieveAPage200ApplicationJsonPropertiesSummaryTextText;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=text", elemType: operations.RetrieveAPage200ApplicationJsonPropertiesSummaryText })
  text?: RetrieveAPage200ApplicationJsonPropertiesSummaryText[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=select" })
  select?: RetrieveAPage200ApplicationJsonPropertiesTypeSelect;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Author" })
  author?: RetrieveAPage200ApplicationJsonPropertiesAuthor;

  @Metadata({ data: "json, name=Link" })
  link?: RetrieveAPage200ApplicationJsonPropertiesLink;

  @Metadata({ data: "json, name=Name" })
  name?: RetrieveAPage200ApplicationJsonPropertiesName;

  @Metadata({ data: "json, name=Publisher" })
  publisher?: RetrieveAPage200ApplicationJsonPropertiesPublisher;

  @Metadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate;

  @Metadata({ data: "json, name=Read" })
  read?: RetrieveAPage200ApplicationJsonPropertiesRead;

  @Metadata({ data: "json, name=Status" })
  status?: RetrieveAPage200ApplicationJsonPropertiesStatus;

  @Metadata({ data: "json, name=Summary" })
  summary?: RetrieveAPage200ApplicationJsonPropertiesSummary;

  @Metadata({ data: "json, name=Type" })
  type?: RetrieveAPage200ApplicationJsonPropertiesType;
}


export class RetrieveAPage200ApplicationJson extends SpeakeasyBase {
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
  parent?: RetrieveAPage200ApplicationJsonParent;

  @Metadata({ data: "json, name=properties" })
  properties?: RetrieveAPage200ApplicationJsonProperties;
}


export class RetrieveAPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  retrieveAPage200ApplicationJsonObject?: RetrieveAPage200ApplicationJson;
}
