import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostQueriesIdRetrievePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostQueriesIdRetrieveRequests extends SpeakeasyBase {
    any?: any;
    textPlain: Uint8Array;
}
export declare class PostQueriesIdRetrieveRequest extends SpeakeasyBase {
    pathParams: PostQueriesIdRetrievePathParams;
    request?: PostQueriesIdRetrieveRequests;
}
export declare class PostQueriesIdRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    postQueriesIdRetrieve200ApplicationJsonAny?: any;
    statusCode: number;
}
