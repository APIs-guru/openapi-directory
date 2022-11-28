import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ServicesIdAllocationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ServicesIdAllocationsRequests extends SpeakeasyBase {
    serviceAllocationInputModel?: shared.ServiceAllocationInputModel;
    serviceAllocationInputModel1?: shared.ServiceAllocationInputModel;
    serviceAllocationInputModel2?: shared.ServiceAllocationInputModel;
    serviceAllocationInputModel3?: shared.ServiceAllocationInputModel;
}
export declare class PostSetupV1ServicesIdAllocationsRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ServicesIdAllocationsPathParams;
    request?: PostSetupV1ServicesIdAllocationsRequests;
}
export declare class PostSetupV1ServicesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
}
