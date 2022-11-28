import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateImagesFromDataPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CreateImagesFromDataQueryParams extends SpeakeasyBase {
    tagIds?: string[];
}
export declare class CreateImagesFromDataHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class CreateImagesFromDataRequestBodyImageData extends SpeakeasyBase {
    content: Uint8Array;
    imageData: string;
}
export declare class CreateImagesFromDataRequestBody extends SpeakeasyBase {
    imageData: CreateImagesFromDataRequestBodyImageData;
}
export declare class CreateImagesFromDataRequest extends SpeakeasyBase {
    pathParams: CreateImagesFromDataPathParams;
    queryParams: CreateImagesFromDataQueryParams;
    headers: CreateImagesFromDataHeaders;
    request: CreateImagesFromDataRequestBody;
}
export declare class CreateImagesFromDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imageCreateSummary?: shared.ImageCreateSummary;
    statusCode: number;
}
