import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ServicesIdAllocationsBulkPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1ServicesIdAllocationsBulkRequests extends SpeakeasyBase {
    serviceAllocationsInputModel?: Map<string, any>;
    serviceAllocationsInputModel1?: Map<string, any>;
    serviceAllocationsInputModel2?: Map<string, any>;
    serviceAllocationsInputModel3?: Map<string, any>;
}
export declare class PostSetupV1ServicesIdAllocationsBulkRequest extends SpeakeasyBase {
    pathParams: PostSetupV1ServicesIdAllocationsBulkPathParams;
    request?: PostSetupV1ServicesIdAllocationsBulkRequests;
}
export declare class PostSetupV1ServicesIdAllocationsBulkResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationViewModels?: shared.ServiceAllocationViewModel[];
    statusCode: number;
}
