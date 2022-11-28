import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdatePagePropertiesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdatePagePropertiesRequestBodyPropertiesStatusSelect extends SpeakeasyBase {
    name?: string;
}
export declare class UpdatePagePropertiesRequestBodyPropertiesStatus extends SpeakeasyBase {
    select?: UpdatePagePropertiesRequestBodyPropertiesStatusSelect;
}
export declare class UpdatePagePropertiesRequestBodyProperties extends SpeakeasyBase {
    status?: UpdatePagePropertiesRequestBodyPropertiesStatus;
}
export declare class UpdatePagePropertiesRequestBody extends SpeakeasyBase {
    properties?: UpdatePagePropertiesRequestBodyProperties;
}
export declare class UpdatePageProperties200ApplicationJsonParent extends SpeakeasyBase {
    databaseId?: string;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesAuthor extends SpeakeasyBase {
    id?: string;
    multiSelect?: UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect[];
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesLink extends SpeakeasyBase {
    id?: string;
    type?: string;
    url?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesNameTitleText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesNameTitle extends SpeakeasyBase {
    annotations?: UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations;
    href?: any;
    plainText?: string;
    text?: UpdatePageProperties200ApplicationJsonPropertiesNameTitleText;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesName extends SpeakeasyBase {
    id?: string;
    title?: UpdatePageProperties200ApplicationJsonPropertiesNameTitle[];
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesPublisher extends SpeakeasyBase {
    id?: string;
    select?: UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate extends SpeakeasyBase {
    end?: any;
    start?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate extends SpeakeasyBase {
    date?: UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate;
    id?: string;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesRead extends SpeakeasyBase {
    checkbox?: boolean;
    id?: string;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesScore5Select extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesScore5 extends SpeakeasyBase {
    id?: string;
    select?: UpdatePageProperties200ApplicationJsonPropertiesScore5Select;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesStatusSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesStatus extends SpeakeasyBase {
    id?: string;
    select?: UpdatePageProperties200ApplicationJsonPropertiesStatusSelect;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText extends SpeakeasyBase {
    annotations?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations;
    href?: any;
    plainText?: string;
    text?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesSummary extends SpeakeasyBase {
    id?: string;
    richText?: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText[];
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesTypeSelect extends SpeakeasyBase {
    color?: string;
    id?: string;
    name?: string;
}
export declare class UpdatePageProperties200ApplicationJsonPropertiesType extends SpeakeasyBase {
    id?: string;
    select?: UpdatePageProperties200ApplicationJsonPropertiesTypeSelect;
    type?: string;
}
export declare class UpdatePageProperties200ApplicationJsonProperties extends SpeakeasyBase {
    author?: UpdatePageProperties200ApplicationJsonPropertiesAuthor;
    link?: UpdatePageProperties200ApplicationJsonPropertiesLink;
    name?: UpdatePageProperties200ApplicationJsonPropertiesName;
    publisher?: UpdatePageProperties200ApplicationJsonPropertiesPublisher;
    publishingReleaseDate?: UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate;
    read?: UpdatePageProperties200ApplicationJsonPropertiesRead;
    score5?: UpdatePageProperties200ApplicationJsonPropertiesScore5;
    status?: UpdatePageProperties200ApplicationJsonPropertiesStatus;
    summary?: UpdatePageProperties200ApplicationJsonPropertiesSummary;
    type?: UpdatePageProperties200ApplicationJsonPropertiesType;
}
export declare class UpdatePageProperties200ApplicationJson extends SpeakeasyBase {
    archived?: boolean;
    createdTime?: string;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    parent?: UpdatePageProperties200ApplicationJsonParent;
    properties?: UpdatePageProperties200ApplicationJsonProperties;
}
export declare class UpdatePagePropertiesRequest extends SpeakeasyBase {
    pathParams: UpdatePagePropertiesPathParams;
    request?: UpdatePagePropertiesRequestBody;
}
export declare class UpdatePagePropertiesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    updatePageProperties200ApplicationJsonObject?: UpdatePageProperties200ApplicationJson;
}
