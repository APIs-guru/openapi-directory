import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ServicesAllocationsIdRequests extends SpeakeasyBase {
    serviceAllocationUpdateModel?: shared.ServiceAllocationUpdateModel;
    serviceAllocationUpdateModel1?: shared.ServiceAllocationUpdateModel;
    serviceAllocationUpdateModel2?: shared.ServiceAllocationUpdateModel;
    serviceAllocationUpdateModel3?: shared.ServiceAllocationUpdateModel;
}
export declare class PutSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ServicesAllocationsIdPathParams;
    request?: PutSetupV1ServicesAllocationsIdRequests;
}
export declare class PutSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
}
