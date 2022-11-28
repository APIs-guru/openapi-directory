import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class QuickTestImageUrlPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class QuickTestImageUrlQueryParams extends SpeakeasyBase {
    iterationId?: string;
}
export declare class QuickTestImageUrlHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class QuickTestImageUrlRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    imageUrl?: shared.ImageUrl;
    imageUrl1?: shared.ImageUrl;
    imageUrl2?: shared.ImageUrl;
    textXml: Uint8Array;
}
export declare class QuickTestImageUrlRequest extends SpeakeasyBase {
    pathParams: QuickTestImageUrlPathParams;
    queryParams: QuickTestImageUrlQueryParams;
    headers: QuickTestImageUrlHeaders;
    request: QuickTestImageUrlRequests;
}
export declare class QuickTestImageUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imagePredictionResult?: shared.ImagePredictionResult;
    statusCode: number;
}
