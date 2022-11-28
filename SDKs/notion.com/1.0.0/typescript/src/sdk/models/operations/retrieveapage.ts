import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RetrieveAPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RetrieveAPage200ApplicationJsonParent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database_id" })
  databaseId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=multi_select", elemType: RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect })
  multiSelect?: RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations extends SpeakeasyBase {
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


export class RetrieveAPage200ApplicationJsonPropertiesNameTitleText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveAPage200ApplicationJsonPropertiesNameTitle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: RetrieveAPage200ApplicationJsonPropertiesNameTitleText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title", elemType: RetrieveAPage200ApplicationJsonPropertiesNameTitle })
  title?: RetrieveAPage200ApplicationJsonPropertiesNameTitle[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: RetrieveAPage200ApplicationJsonPropertiesPublisherSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: any;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesRead extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkbox" })
  checkbox?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: RetrieveAPage200ApplicationJsonPropertiesStatusSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations extends SpeakeasyBase {
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


export class RetrieveAPage200ApplicationJsonPropertiesSummaryTextText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: any;
}


export class RetrieveAPage200ApplicationJsonPropertiesSummaryText extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: any;

  @SpeakeasyMetadata({ data: "json, name=plain_text" })
  plainText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: RetrieveAPage200ApplicationJsonPropertiesSummaryTextText;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=text", elemType: RetrieveAPage200ApplicationJsonPropertiesSummaryText })
  text?: RetrieveAPage200ApplicationJsonPropertiesSummaryText[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class RetrieveAPage200ApplicationJsonPropertiesType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: RetrieveAPage200ApplicationJsonPropertiesTypeSelect;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class RetrieveAPage200ApplicationJsonProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: RetrieveAPage200ApplicationJsonPropertiesAuthor;

  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: RetrieveAPage200ApplicationJsonPropertiesLink;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: RetrieveAPage200ApplicationJsonPropertiesName;

  @SpeakeasyMetadata({ data: "json, name=Publisher" })
  publisher?: RetrieveAPage200ApplicationJsonPropertiesPublisher;

  @SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" })
  publishingReleaseDate?: RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate;

  @SpeakeasyMetadata({ data: "json, name=Read" })
  read?: RetrieveAPage200ApplicationJsonPropertiesRead;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: RetrieveAPage200ApplicationJsonPropertiesStatus;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: RetrieveAPage200ApplicationJsonPropertiesSummary;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: RetrieveAPage200ApplicationJsonPropertiesType;
}


export class RetrieveAPage200ApplicationJson extends SpeakeasyBase {
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
  parent?: RetrieveAPage200ApplicationJsonParent;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: RetrieveAPage200ApplicationJsonProperties;
}


export class RetrieveAPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RetrieveAPagePathParams;
}


export class RetrieveAPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  retrieveAPage200ApplicationJsonObject?: RetrieveAPage200ApplicationJson;
}
