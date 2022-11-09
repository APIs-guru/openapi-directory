import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostQueriesIdAnswersIndexRetrievePathParams extends SpeakeasyBase {
    id: string;
    index: string;
}
export declare class PostQueriesIdAnswersIndexRetrieveRequests extends SpeakeasyBase {
    any?: any;
    textPlain: Uint8Array;
}
export declare class PostQueriesIdAnswersIndexRetrieveRequest extends SpeakeasyBase {
    pathParams: PostQueriesIdAnswersIndexRetrievePathParams;
    request?: PostQueriesIdAnswersIndexRetrieveRequests;
}
export declare class PostQueriesIdAnswersIndexRetrieveResponse extends SpeakeasyBase {
    contentType: string;
    postQueriesIdAnswersIndexRetrieve200ApplicationJsonAny?: any;
    statusCode: number;
}
