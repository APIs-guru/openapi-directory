import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostPeersIdStoreStraightPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostPeersIdStoreStraightRequest extends SpeakeasyBase {
    pathParams: PostPeersIdStoreStraightPathParams;
    request?: Uint8Array;
}
export declare class PostPeersIdStoreStraightResponse extends SpeakeasyBase {
    contentType: string;
    postPeersIdStoreStraight200ApplicationJsonAny?: any;
    statusCode: number;
}
