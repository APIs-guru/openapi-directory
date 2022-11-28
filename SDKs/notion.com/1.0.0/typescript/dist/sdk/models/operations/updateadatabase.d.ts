import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateADatabasePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateADatabaseRequestBodyPropertiesWinePairing extends SpeakeasyBase {
    richText?: Map<string, any>;
}
export declare class UpdateADatabaseRequestBodyProperties extends SpeakeasyBase {
    winePairing?: UpdateADatabaseRequestBodyPropertiesWinePairing;
}
export declare class UpdateADatabaseRequestBodyTitleText extends SpeakeasyBase {
    content?: string;
}
export declare class UpdateADatabaseRequestBodyTitle extends SpeakeasyBase {
    text?: UpdateADatabaseRequestBodyTitleText;
}
export declare class UpdateADatabaseRequestBody extends SpeakeasyBase {
    properties?: UpdateADatabaseRequestBodyProperties;
    title?: UpdateADatabaseRequestBodyTitle[];
}
export declare class UpdateADatabase200ApplicationJsonParent extends SpeakeasyBase {
    pageId?: string;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
    options?: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions[];
}
export declare class UpdateADatabase200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
    id?: string;
    multiSelect?: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect;
    name?: string;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesLink extends SpeakeasyBase {
    id?: string;
    name?: string;
    type?: string;
    url?: Map<string, any>;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesName extends SpeakeasyBase {
    id?: string;
    name?: string;
    title?: Map<string, any>;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
    options?: UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions[];
}
export declare class UpdateADatabase200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
    id?: string;
    name?: string;
    select?: UpdateADatabase200ApplicationJsonPropertiesPublisherSelect;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
    date?: Map<string, any>;
    id?: string;
    name?: string;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesRead extends SpeakeasyBase {
    checkbox?: Map<string, any>;
    id?: string;
    name?: string;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
    options?: UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions[];
}
export declare class UpdateADatabase200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
    id?: string;
    name?: string;
    select?: UpdateADatabase200ApplicationJsonPropertiesScore5Select;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
    options?: UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions[];
}
export declare class UpdateADatabase200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
    id?: string;
    name?: string;
    select?: UpdateADatabase200ApplicationJsonPropertiesStatusSelect;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
    id?: string;
    name?: string;
    richText?: Map<string, any>;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
    options?: UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions[];
}
export declare class UpdateADatabase200ApplicationJsonPropertiesType extends SpeakeasyBase {
    id?: string;
    name?: string;
    select?: UpdateADatabase200ApplicationJsonPropertiesTypeSelect;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesWinePairing extends SpeakeasyBase {
    id?: string;
    name?: string;
    richText?: Map<string, any>;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonPropertiesDate extends SpeakeasyBase {
    date?: Map<string, any>;
    id?: string;
    name?: string;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJsonProperties extends SpeakeasyBase {
    author?: UpdateADatabase200ApplicationJsonPropertiesAuthor;
    link?: UpdateADatabase200ApplicationJsonPropertiesLink;
    name?: UpdateADatabase200ApplicationJsonPropertiesName;
    publisher?: UpdateADatabase200ApplicationJsonPropertiesPublisher;
    publishingReleaseDate?: UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate;
    read?: UpdateADatabase200ApplicationJsonPropertiesRead;
    score5?: UpdateADatabase200ApplicationJsonPropertiesScore5;
    status?: UpdateADatabase200ApplicationJsonPropertiesStatus;
    summary?: UpdateADatabase200ApplicationJsonPropertiesSummary;
    type?: UpdateADatabase200ApplicationJsonPropertiesType;
    winePairing?: UpdateADatabase200ApplicationJsonPropertiesWinePairing;
    date?: UpdateADatabase200ApplicationJsonPropertiesDate;
}
export declare class UpdateADatabase200ApplicationJsonTitleAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class UpdateADatabase200ApplicationJsonTitleText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class UpdateADatabase200ApplicationJsonTitle extends SpeakeasyBase {
    annotations?: UpdateADatabase200ApplicationJsonTitleAnnotations;
    href?: any;
    plainText?: string;
    text?: UpdateADatabase200ApplicationJsonTitleText;
    type?: string;
}
export declare class UpdateADatabase200ApplicationJson extends SpeakeasyBase {
    createdTime?: string;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    parent?: UpdateADatabase200ApplicationJsonParent;
    properties?: UpdateADatabase200ApplicationJsonProperties;
    title?: UpdateADatabase200ApplicationJsonTitle[];
}
export declare class UpdateADatabaseRequest extends SpeakeasyBase {
    pathParams: UpdateADatabasePathParams;
    request?: UpdateADatabaseRequestBody;
}
export declare class UpdateADatabaseResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    updateADatabase200ApplicationJsonObject?: UpdateADatabase200ApplicationJson;
}
