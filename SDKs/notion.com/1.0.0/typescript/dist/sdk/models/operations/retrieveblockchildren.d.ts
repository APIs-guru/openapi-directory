import { SpeakeasyBase } from "../../../internal/utils";
export declare class RetrieveBlockChildrenPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetrieveBlockChildrenQueryParams extends SpeakeasyBase {
    pageSize?: string;
}
export declare class RetrieveBlockChildren200ApplicationJsonResults extends SpeakeasyBase {
    createdTime?: string;
    hasChildren?: boolean;
    id?: string;
    lastEditedTime?: string;
    object?: string;
    type?: string;
    unsupported?: Map<string, any>;
}
export declare class RetrieveBlockChildren200ApplicationJson extends SpeakeasyBase {
    hasMore?: boolean;
    nextCursor?: any;
    object?: string;
    results?: RetrieveBlockChildren200ApplicationJsonResults[];
}
export declare class RetrieveBlockChildrenRequest extends SpeakeasyBase {
    pathParams: RetrieveBlockChildrenPathParams;
    queryParams: RetrieveBlockChildrenQueryParams;
}
export declare class RetrieveBlockChildrenResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    retrieveBlockChildren200ApplicationJsonObject?: RetrieveBlockChildren200ApplicationJson;
}
