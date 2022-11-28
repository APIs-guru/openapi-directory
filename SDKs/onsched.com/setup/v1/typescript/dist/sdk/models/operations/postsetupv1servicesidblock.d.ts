import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ServicesIdBlockPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ServicesIdBlockRequests extends SpeakeasyBase {
    serviceBlockInputModel?: shared.ServiceBlockInputModel;
    serviceBlockInputModel1?: shared.ServiceBlockInputModel;
    serviceBlockInputModel2?: shared.ServiceBlockInputModel;
    serviceBlockInputModel3?: shared.ServiceBlockInputModel;
}
export declare class PostSetupV1ServicesIdBlockRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ServicesIdBlockPathParams;
    request?: PostSetupV1ServicesIdBlockRequests;
}
export declare class PostSetupV1ServicesIdBlockResponse extends SpeakeasyBase {
    contentType: string;
    serviceBlockViewModel?: shared.ServiceBlockViewModel;
    statusCode: number;
}
