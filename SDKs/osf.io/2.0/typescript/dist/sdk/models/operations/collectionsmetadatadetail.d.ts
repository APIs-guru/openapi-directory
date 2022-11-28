import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollectionsMetadataDetailPathParams extends SpeakeasyBase {
    cgmId: string;
    collectionId: string;
}
export declare class CollectionsMetadataDetailRequest extends SpeakeasyBase {
    pathParams: CollectionsMetadataDetailPathParams;
    request: Map<string, any>;
}
export declare class CollectionsMetadataDetailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
