import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ServicesRequests extends SpeakeasyBase {
    serviceInputModel?: shared.ServiceInputModel;
    serviceInputModel1?: shared.ServiceInputModel;
    serviceInputModel2?: shared.ServiceInputModel;
    serviceInputModel3?: shared.ServiceInputModel;
}
export declare class PostSetupV1ServicesRequest extends SpeakeasyBase {
    request?: PostSetupV1ServicesRequests;
}
export declare class PostSetupV1ServicesResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}
