import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ResourcesIdAllocationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ResourcesIdAllocationsRequests extends SpeakeasyBase {
    resourceAllocationInputModel?: shared.ResourceAllocationInputModel;
    resourceAllocationInputModel1?: shared.ResourceAllocationInputModel;
    resourceAllocationInputModel2?: shared.ResourceAllocationInputModel;
    resourceAllocationInputModel3?: shared.ResourceAllocationInputModel;
}
export declare class PostSetupV1ResourcesIdAllocationsRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ResourcesIdAllocationsPathParams;
    request?: PostSetupV1ResourcesIdAllocationsRequests;
}
export declare class PostSetupV1ResourcesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
