import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PredictImagePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class PredictImageQueryParams extends SpeakeasyBase {
    application?: string;
    iterationId?: string;
}
export declare class PredictImageHeaders extends SpeakeasyBase {
    predictionKey: string;
}
export declare class PredictImageRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class PredictImageRequestBody extends SpeakeasyBase {
    imageData: PredictImageRequestBodyImageData;
}
export declare class PredictImageRequest extends SpeakeasyBase {
    pathParams: PredictImagePathParams;
    queryParams: PredictImageQueryParams;
    headers: PredictImageHeaders;
    request: PredictImageRequestBody;
}
export declare class PredictImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imagePredictionResultModel?: shared.ImagePredictionResultModel;
    statusCode: number;
}
