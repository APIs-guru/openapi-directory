import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteImagesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeleteImagesQueryParams extends SpeakeasyBase {
    imageIds: string[];
}
export declare class DeleteImagesHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeleteImagesRequest extends SpeakeasyBase {
    pathParams: DeleteImagesPathParams;
    queryParams: DeleteImagesQueryParams;
    headers: DeleteImagesHeaders;
}
export declare class DeleteImagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
