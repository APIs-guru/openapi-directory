import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ServicesIdUploadimagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ServicesIdUploadimageRequests extends SpeakeasyBase {
    serviceImageInputModel?: shared.ServiceImageInputModel;
    serviceImageInputModel1?: shared.ServiceImageInputModel;
    serviceImageInputModel2?: shared.ServiceImageInputModel;
    serviceImageInputModel3?: shared.ServiceImageInputModel;
}
export declare class PostSetupV1ServicesIdUploadimageRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ServicesIdUploadimagePathParams;
    request?: PostSetupV1ServicesIdUploadimageRequests;
}
export declare class PostSetupV1ServicesIdUploadimageResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}
