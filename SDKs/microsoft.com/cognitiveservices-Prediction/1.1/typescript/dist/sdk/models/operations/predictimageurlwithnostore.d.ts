import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PredictImageUrlWithNoStorePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class PredictImageUrlWithNoStoreQueryParams extends SpeakeasyBase {
    application?: string;
    iterationId?: string;
}
export declare class PredictImageUrlWithNoStoreHeaders extends SpeakeasyBase {
    predictionKey: string;
}
export declare class PredictImageUrlWithNoStoreRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    imageUrl?: shared.ImageUrl;
    imageUrl1?: shared.ImageUrl;
    imageUrl2?: shared.ImageUrl;
    textXml: Uint8Array;
}
export declare class PredictImageUrlWithNoStoreRequest extends SpeakeasyBase {
    pathParams: PredictImageUrlWithNoStorePathParams;
    queryParams: PredictImageUrlWithNoStoreQueryParams;
    headers: PredictImageUrlWithNoStoreHeaders;
    request: PredictImageUrlWithNoStoreRequests;
}
export declare class PredictImageUrlWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imagePredictionResultModel?: shared.ImagePredictionResultModel;
    statusCode: number;
}
