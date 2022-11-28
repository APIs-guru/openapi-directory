import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrieveABlockPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveABlock200ApplicationJsonParagraphTextAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class RetrieveABlock200ApplicationJsonParagraphTextText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class RetrieveABlock200ApplicationJsonParagraphText extends SpeakeasyBase {
    annotations?: RetrieveABlock200ApplicationJsonParagraphTextAnnotations;
    href?: any;
    plainText?: string;
    text?: RetrieveABlock200ApplicationJsonParagraphTextText;
    type?: string;
}
export declare class RetrieveABlock200ApplicationJsonParagraph extends SpeakeasyBase {
    text?: RetrieveABlock200ApplicationJsonParagraphText[];
}
export declare class RetrieveABlock200ApplicationJson extends SpeakeasyBase {
    createdTime?: string;
    hasChildren?: boolean;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    paragraph?: RetrieveABlock200ApplicationJsonParagraph;
    type?: string;
}
export declare class RetrieveABlockRequest extends SpeakeasyBase {
    pathParams: RetrieveABlockPathParams;
}
export declare class RetrieveABlockResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    retrieveABlock200ApplicationJsonObject?: RetrieveABlock200ApplicationJson;
}
