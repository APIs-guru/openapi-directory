import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PredictImageWithNoStorePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class PredictImageWithNoStoreQueryParams extends SpeakeasyBase {
    application?: string;
    iterationId?: string;
}
export declare class PredictImageWithNoStoreHeaders extends SpeakeasyBase {
    predictionKey: string;
}
export declare class PredictImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class PredictImageWithNoStoreRequestBody extends SpeakeasyBase {
    imageData: PredictImageWithNoStoreRequestBodyImageData;
}
export declare class PredictImageWithNoStoreRequest extends SpeakeasyBase {
    pathParams: PredictImageWithNoStorePathParams;
    queryParams: PredictImageWithNoStoreQueryParams;
    headers: PredictImageWithNoStoreHeaders;
    request: PredictImageWithNoStoreRequestBody;
}
export declare class PredictImageWithNoStoreResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imagePredictionResultModel?: shared.ImagePredictionResultModel;
    statusCode: number;
}
