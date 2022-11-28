import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollectionsDetailPathParams extends SpeakeasyBase {
    collectionId: string;
}
export declare class CollectionsDetailRequest extends SpeakeasyBase {
    pathParams: CollectionsDetailPathParams;
}
export declare class CollectionsDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
