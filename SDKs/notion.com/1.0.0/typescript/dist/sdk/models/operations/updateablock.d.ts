import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateABlockPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateABlockRequestBodyParagraphTextText extends SpeakeasyBase {
    content?: string;
}
export declare class UpdateABlockRequestBodyParagraphText extends SpeakeasyBase {
    text?: UpdateABlockRequestBodyParagraphTextText;
    type?: string;
}
export declare class UpdateABlockRequestBodyParagraph extends SpeakeasyBase {
    text?: UpdateABlockRequestBodyParagraphText[];
}
export declare class UpdateABlockRequestBody extends SpeakeasyBase {
    paragraph?: UpdateABlockRequestBodyParagraph;
}
export declare class UpdateABlock200ApplicationJsonParagraphTextAnnotations extends SpeakeasyBase {
    bold?: boolean;
    code?: boolean;
    color?: string;
    italic?: boolean;
    strikethrough?: boolean;
    underline?: boolean;
}
export declare class UpdateABlock200ApplicationJsonParagraphTextText extends SpeakeasyBase {
    content?: string;
    link?: any;
}
export declare class UpdateABlock200ApplicationJsonParagraphText extends SpeakeasyBase {
    annotations?: UpdateABlock200ApplicationJsonParagraphTextAnnotations;
    href?: any;
    plainText?: string;
    text?: UpdateABlock200ApplicationJsonParagraphTextText;
    type?: string;
}
export declare class UpdateABlock200ApplicationJsonParagraph extends SpeakeasyBase {
    text?: UpdateABlock200ApplicationJsonParagraphText[];
}
export declare class UpdateABlock200ApplicationJson extends SpeakeasyBase {
    createdTime?: string;
    hasChildren?: boolean;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    paragraph?: UpdateABlock200ApplicationJsonParagraph;
    type?: string;
}
export declare class UpdateABlockRequest extends SpeakeasyBase {
    pathParams: UpdateABlockPathParams;
    request?: UpdateABlockRequestBody;
}
export declare class UpdateABlockResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    updateABlock200ApplicationJsonObject?: UpdateABlock200ApplicationJson;
}
