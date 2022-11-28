import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppendBlockChildrenPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AppendBlockChildrenRequestBodyChildrenHeading2TextText extends SpeakeasyBase {
    content?: string;
}
export declare class AppendBlockChildrenRequestBodyChildrenHeading2Text extends SpeakeasyBase {
    text?: AppendBlockChildrenRequestBodyChildrenHeading2TextText;
    type?: string;
}
export declare class AppendBlockChildrenRequestBodyChildrenHeading2 extends SpeakeasyBase {
    text?: AppendBlockChildrenRequestBodyChildrenHeading2Text[];
}
export declare class AppendBlockChildrenRequestBodyChildren extends SpeakeasyBase {
    heading2?: AppendBlockChildrenRequestBodyChildrenHeading2;
    object?: string;
    type?: string;
}
export declare class AppendBlockChildrenRequestBody extends SpeakeasyBase {
    children?: AppendBlockChildrenRequestBodyChildren[];
}
export declare class AppendBlockChildren200ApplicationJsonChildPage extends SpeakeasyBase {
    title?: string;
}
export declare class AppendBlockChildren200ApplicationJson extends SpeakeasyBase {
    childPage?: AppendBlockChildren200ApplicationJsonChildPage;
    createdTime?: string;
    hasChildren?: boolean;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    type?: string;
}
export declare class AppendBlockChildrenRequest extends SpeakeasyBase {
    pathParams: AppendBlockChildrenPathParams;
    request?: AppendBlockChildrenRequestBody;
}
export declare class AppendBlockChildrenResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    appendBlockChildren200ApplicationJsonObject?: AppendBlockChildren200ApplicationJson;
}
