import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PredictImageUrlPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class PredictImageUrlQueryParams extends SpeakeasyBase {
    application?: string;
    iterationId?: string;
}
export declare class PredictImageUrlHeaders extends SpeakeasyBase {
    predictionKey: string;
}
export declare class PredictImageUrlRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    imageUrl?: shared.ImageUrl;
    imageUrl1?: shared.ImageUrl;
    imageUrl2?: shared.ImageUrl;
    textXml: Uint8Array;
}
export declare class PredictImageUrlRequest extends SpeakeasyBase {
    pathParams: PredictImageUrlPathParams;
    queryParams: PredictImageUrlQueryParams;
    headers: PredictImageUrlHeaders;
    request: PredictImageUrlRequests;
}
export declare class PredictImageUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imagePredictionResultModel?: shared.ImagePredictionResultModel;
    statusCode: number;
}
