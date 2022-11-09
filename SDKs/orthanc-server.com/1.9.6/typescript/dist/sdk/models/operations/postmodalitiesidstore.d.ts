import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostModalitiesIdStorePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostModalitiesIdStoreRequests extends SpeakeasyBase {
    any?: any;
    textPlain: Uint8Array;
}
export declare class PostModalitiesIdStoreRequest extends SpeakeasyBase {
    pathParams: PostModalitiesIdStorePathParams;
    request?: PostModalitiesIdStoreRequests;
}
export declare class PostModalitiesIdStoreResponse extends SpeakeasyBase {
    contentType: string;
    postModalitiesIdStore200ApplicationJsonAny?: any;
    statusCode: number;
}
