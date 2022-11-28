import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1LocationsIdUploadimagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1LocationsIdUploadimageRequests extends SpeakeasyBase {
    resourceImageInputModel?: shared.ResourceImageInputModel;
    resourceImageInputModel1?: shared.ResourceImageInputModel;
    resourceImageInputModel2?: shared.ResourceImageInputModel;
    resourceImageInputModel3?: shared.ResourceImageInputModel;
}
export declare class PostSetupV1LocationsIdUploadimageRequest extends SpeakeasyBase {
    pathParams: PostSetupV1LocationsIdUploadimagePathParams;
    request?: PostSetupV1LocationsIdUploadimageRequests;
}
export declare class PostSetupV1LocationsIdUploadimageResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
