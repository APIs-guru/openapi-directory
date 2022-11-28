import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostPeersIdStorePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostPeersIdStoreRequests extends SpeakeasyBase {
    any?: any;
    textPlain: Uint8Array;
}
export declare class PostPeersIdStoreRequest extends SpeakeasyBase {
    pathParams: PostPeersIdStorePathParams;
    request?: PostPeersIdStoreRequests;
}
export declare class PostPeersIdStoreResponse extends SpeakeasyBase {
    contentType: string;
    postPeersIdStore200ApplicationJsonAny?: any;
    statusCode: number;
}
