import { SpeakeasyBase } from "../../../internal/utils";
export declare class QueryADatabasePathParams extends SpeakeasyBase {
    id: string;
}
export declare class QueryADatabaseRequestBodyFilterOrSelect extends SpeakeasyBase {
    equals?: string;
}
export declare class QueryADatabaseRequestBodyFilterOr extends SpeakeasyBase {
    property?: string;
    select?: QueryADatabaseRequestBodyFilterOrSelect;
}
export declare class QueryADatabaseRequestBodyFilter extends SpeakeasyBase {
    or?: QueryADatabaseRequestBodyFilterOr[];
}
export declare class QueryADatabaseRequestBodySorts extends SpeakeasyBase {
    direction?: string;
    property?: string;
}
export declare class QueryADatabaseRequestBody extends SpeakeasyBase {
    filter?: QueryADatabaseRequestBodyFilter;
    sorts?: QueryADatabaseRequestBodySorts[];
}
export declare class QueryADatabase200ApplicationJsonResultsParent extends SpeakeasyBase {
    databaseId?: string;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesAuthor extends SpeakeasyBase {
    id?: string;
    multiSelect?: QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect[];
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesLink extends SpeakeasyBase {
    id?: string;
    type?: string;
    url?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesNameTitle extends SpeakeasyBase {
    annotations?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations;
    href?: any;
    plainText?: string;
    text?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesName extends SpeakeasyBase {
    id?: string;
    title?: QueryADatabase200ApplicationJsonResultsPropertiesNameTitle[];
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesPublisher extends SpeakeasyBase {
    id?: string;
    select?: QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
    end?: any;
    start?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate extends SpeakeasyBase {
    date?: QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate;
    id?: string;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesRead extends SpeakeasyBase {
    checkbox?: boolean;
    id?: string;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesScore5Select extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesScore5 extends SpeakeasyBase {
    id?: string;
    select?: QueryADatabase200ApplicationJsonResultsPropertiesScore5Select;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesStatus extends SpeakeasyBase {
    id?: string;
    select?: QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesSummary extends SpeakeasyBase {
    id?: string;
    text?: any[];
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsPropertiesType extends SpeakeasyBase {
    id?: string;
    select?: QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect;
    type?: string;
}
export declare class QueryADatabase200ApplicationJsonResultsProperties extends SpeakeasyBase {
    author?: QueryADatabase200ApplicationJsonResultsPropertiesAuthor;
    link?: QueryADatabase200ApplicationJsonResultsPropertiesLink;
    name?: QueryADatabase200ApplicationJsonResultsPropertiesName;
    publisher?: QueryADatabase200ApplicationJsonResultsPropertiesPublisher;
    publishingReleaseDate?: QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate;
    read?: QueryADatabase200ApplicationJsonResultsPropertiesRead;
    score5?: QueryADatabase200ApplicationJsonResultsPropertiesScore5;
    status?: QueryADatabase200ApplicationJsonResultsPropertiesStatus;
    summary?: QueryADatabase200ApplicationJsonResultsPropertiesSummary;
    type?: QueryADatabase200ApplicationJsonResultsPropertiesType;
}
export declare class QueryADatabase200ApplicationJsonResults extends SpeakeasyBase {
    archived?: boolean;
    createdTime?: string;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    parent?: QueryADatabase200ApplicationJsonResultsParent;
    properties?: QueryADatabase200ApplicationJsonResultsProperties;
}
export declare class QueryADatabase200ApplicationJson extends SpeakeasyBase {
    hasMore?: boolean;
    nextCursor?: any;
    object?: string;
    results?: QueryADatabase200ApplicationJsonResults[];
}
export declare class QueryADatabaseRequest extends SpeakeasyBase {
    pathParams: QueryADatabasePathParams;
    request?: QueryADatabaseRequestBody;
}
export declare class QueryADatabaseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    queryADatabase200ApplicationJsonObject?: QueryADatabase200ApplicationJson;
}
