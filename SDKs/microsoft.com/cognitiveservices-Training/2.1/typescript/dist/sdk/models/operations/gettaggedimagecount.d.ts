import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTaggedImageCountPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetTaggedImageCountQueryParams extends SpeakeasyBase {
    iterationId?: string;
    tagIds?: string[];
}
export declare class GetTaggedImageCountHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetTaggedImageCountRequest extends SpeakeasyBase {
    pathParams: GetTaggedImageCountPathParams;
    queryParams: GetTaggedImageCountQueryParams;
    headers: GetTaggedImageCountHeaders;
}
export declare class GetTaggedImageCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getTaggedImageCount200ApplicationJsonInt32Integer?: number;
    getTaggedImageCount200TextJsonInt32Integer?: number;
    statusCode: number;
}
