import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrieveADatabasePathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
    options?: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[];
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
    id?: string;
    multiSelect?: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesLink extends SpeakeasyBase {
    id?: string;
    type?: string;
    url?: Map<string, any>;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesName extends SpeakeasyBase {
    id?: string;
    title?: Map<string, any>;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
    options?: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions[];
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
    id?: string;
    select?: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
    date?: Map<string, any>;
    id?: string;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesRead extends SpeakeasyBase {
    checkbox?: Map<string, any>;
    id?: string;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
    options?: RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions[];
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
    id?: string;
    select?: RetrieveADatabase200ApplicationJsonPropertiesScore5Select;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
    options?: RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions[];
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
    id?: string;
    select?: RetrieveADatabase200ApplicationJsonPropertiesStatusSelect;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
    id?: string;
    text?: Map<string, any>;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
    options?: RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions[];
}
export declare class RetrieveADatabase200ApplicationJsonPropertiesType extends SpeakeasyBase {
    id?: string;
    select?: RetrieveADatabase200ApplicationJsonPropertiesTypeSelect;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJsonProperties extends SpeakeasyBase {
    author?: RetrieveADatabase200ApplicationJsonPropertiesAuthor;
    link?: RetrieveADatabase200ApplicationJsonPropertiesLink;
    name?: RetrieveADatabase200ApplicationJsonPropertiesName;
    publisher?: RetrieveADatabase200ApplicationJsonPropertiesPublisher;
    publishingReleaseDate?: RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate;
    read?: RetrieveADatabase200ApplicationJsonPropertiesRead;
    score5?: RetrieveADatabase200ApplicationJsonPropertiesScore5;
    status?: RetrieveADatabase200ApplicationJsonPropertiesStatus;
    summary?: RetrieveADatabase200ApplicationJsonPropertiesSummary;
    type?: RetrieveADatabase200ApplicationJsonPropertiesType;
}
export declare class RetrieveADatabase200ApplicationJsonTitleAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class RetrieveADatabase200ApplicationJsonTitleText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class RetrieveADatabase200ApplicationJsonTitle extends SpeakeasyBase {
    annotations?: RetrieveADatabase200ApplicationJsonTitleAnnotations;
    href?: any;
    plainText?: string;
    text?: RetrieveADatabase200ApplicationJsonTitleText;
    type?: string;
}
export declare class RetrieveADatabase200ApplicationJson extends SpeakeasyBase {
    createdTime?: string;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    properties?: RetrieveADatabase200ApplicationJsonProperties;
    title?: RetrieveADatabase200ApplicationJsonTitle[];
}
export declare class RetrieveADatabaseRequest extends SpeakeasyBase {
    pathParams: RetrieveADatabasePathParams;
}
export declare class RetrieveADatabaseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    retrieveADatabase200ApplicationJsonObject?: RetrieveADatabase200ApplicationJson;
}
