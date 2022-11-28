import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrieveAPagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveAPage200ApplicationJsonParent extends SpeakeasyBase {
    databaseId?: string;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
    id?: string;
    multiSelect?: RetrieveAPage200ApplicationJsonPropertiesAuthorMultiSelect[];
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesLink extends SpeakeasyBase {
    id?: string;
    type?: string;
    url?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesNameTitleText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesNameTitle extends SpeakeasyBase {
    annotations?: RetrieveAPage200ApplicationJsonPropertiesNameTitleAnnotations;
    href?: any;
    plainText?: string;
    text?: RetrieveAPage200ApplicationJsonPropertiesNameTitleText;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesName extends SpeakeasyBase {
    id?: string;
    title?: RetrieveAPage200ApplicationJsonPropertiesNameTitle[];
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
    id?: string;
    select?: RetrieveAPage200ApplicationJsonPropertiesPublisherSelect;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
    end?: any;
    start?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
    date?: RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDateDate;
    id?: string;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesRead extends SpeakeasyBase {
    checkbox?: boolean;
    id?: string;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
    id?: string;
    select?: RetrieveAPage200ApplicationJsonPropertiesStatusSelect;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesSummaryTextText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesSummaryText extends SpeakeasyBase {
    annotations?: RetrieveAPage200ApplicationJsonPropertiesSummaryTextAnnotations;
    href?: any;
    plainText?: string;
    text?: RetrieveAPage200ApplicationJsonPropertiesSummaryTextText;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
    id?: string;
    text?: RetrieveAPage200ApplicationJsonPropertiesSummaryText[];
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class RetrieveAPage200ApplicationJsonPropertiesType extends SpeakeasyBase {
    id?: string;
    select?: RetrieveAPage200ApplicationJsonPropertiesTypeSelect;
    type?: string;
}
export declare class RetrieveAPage200ApplicationJsonProperties extends SpeakeasyBase {
    author?: RetrieveAPage200ApplicationJsonPropertiesAuthor;
    link?: RetrieveAPage200ApplicationJsonPropertiesLink;
    name?: RetrieveAPage200ApplicationJsonPropertiesName;
    publisher?: RetrieveAPage200ApplicationJsonPropertiesPublisher;
    publishingReleaseDate?: RetrieveAPage200ApplicationJsonPropertiesPublishingReleaseDate;
    read?: RetrieveAPage200ApplicationJsonPropertiesRead;
    status?: RetrieveAPage200ApplicationJsonPropertiesStatus;
    summary?: RetrieveAPage200ApplicationJsonPropertiesSummary;
    type?: RetrieveAPage200ApplicationJsonPropertiesType;
}
export declare class RetrieveAPage200ApplicationJson extends SpeakeasyBase {
    archived?: boolean;
    createdTime?: string;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    parent?: RetrieveAPage200ApplicationJsonParent;
    properties?: RetrieveAPage200ApplicationJsonProperties;
}
export declare class RetrieveAPageRequest extends SpeakeasyBase {
    pathParams: RetrieveAPagePathParams;
}
export declare class RetrieveAPageResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    retrieveAPage200ApplicationJsonObject?: RetrieveAPage200ApplicationJson;
}
