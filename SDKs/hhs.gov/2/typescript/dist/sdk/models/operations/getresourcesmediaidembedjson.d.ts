import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetResourcesMediaIdEmbedJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesMediaIdEmbedJsonQueryParams extends SpeakeasyBase {
    displayMethod?: string;
    divId?: string;
    excludeDiv?: boolean;
    excludeJquery?: boolean;
    flavor?: string;
    height?: number;
    iframeName?: string;
    width?: number;
}
export declare class GetResourcesMediaIdEmbedJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaIdEmbedJsonPathParams;
    queryParams: GetResourcesMediaIdEmbedJsonQueryParams;
}
export declare class GetResourcesMediaIdEmbedJsonResponse extends SpeakeasyBase {
    contentType: string;
    getResourcesMediaIdEmbedJson200ApplicationJsonString?: string;
    statusCode: number;
}
