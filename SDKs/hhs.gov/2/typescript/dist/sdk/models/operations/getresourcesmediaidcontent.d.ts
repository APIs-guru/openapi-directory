import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetResourcesMediaIdContentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesMediaIdContentQueryParams extends SpeakeasyBase {
    calledByBuild?: boolean;
}
export declare class GetResourcesMediaIdContentRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaIdContentPathParams;
    queryParams: GetResourcesMediaIdContentQueryParams;
}
export declare class GetResourcesMediaIdContentResponse extends SpeakeasyBase {
    contentType: string;
    getResourcesMediaIdContent200ApplicationJsonString?: string;
    statusCode: number;
}
