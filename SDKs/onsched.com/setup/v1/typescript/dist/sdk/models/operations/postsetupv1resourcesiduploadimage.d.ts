import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ResourcesIdUploadimagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ResourcesIdUploadimageRequests extends SpeakeasyBase {
    resourceImageInputModel?: shared.ResourceImageInputModel;
    resourceImageInputModel1?: shared.ResourceImageInputModel;
    resourceImageInputModel2?: shared.ResourceImageInputModel;
    resourceImageInputModel3?: shared.ResourceImageInputModel;
}
export declare class PostSetupV1ResourcesIdUploadimageRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ResourcesIdUploadimagePathParams;
    request?: PostSetupV1ResourcesIdUploadimageRequests;
}
export declare class PostSetupV1ResourcesIdUploadimageResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
