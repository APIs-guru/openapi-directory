import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuickTestImagePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class QuickTestImageQueryParams extends SpeakeasyBase {
    iterationId?: string;
}
export declare class QuickTestImageHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class QuickTestImageRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class QuickTestImageRequestBody extends SpeakeasyBase {
    imageData: QuickTestImageRequestBodyImageData;
}
export declare class QuickTestImageRequest extends SpeakeasyBase {
    pathParams: QuickTestImagePathParams;
    queryParams: QuickTestImageQueryParams;
    headers: QuickTestImageHeaders;
    request: QuickTestImageRequestBody;
}
export declare class QuickTestImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imagePredictionResult?: shared.ImagePredictionResult;
    statusCode: number;
}
