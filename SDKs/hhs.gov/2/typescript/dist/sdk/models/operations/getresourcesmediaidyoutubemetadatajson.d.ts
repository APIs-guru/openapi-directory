import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetResourcesMediaIdYoutubeMetaDataJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson extends SpeakeasyBase {
    callback?: string;
    meta?: shared.Meta;
    results?: Map<string, any>[];
}
export declare class GetResourcesMediaIdYoutubeMetaDataJsonRequest extends SpeakeasyBase {
    pathParams: GetResourcesMediaIdYoutubeMetaDataJsonPathParams;
}
export declare class GetResourcesMediaIdYoutubeMetaDataJsonResponse extends SpeakeasyBase {
    contentType: string;
    getResourcesMediaIdYoutubeMetaDataJson200ApplicationJsonObject?: GetResourcesMediaIdYoutubeMetaDataJson200ApplicationJson;
    statusCode: number;
}
