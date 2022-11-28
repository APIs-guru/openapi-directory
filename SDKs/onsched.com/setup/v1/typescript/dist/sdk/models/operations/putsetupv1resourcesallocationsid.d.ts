import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesAllocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ResourcesAllocationsIdRequests extends SpeakeasyBase {
    resourceAllocationUpdateModel?: shared.ResourceAllocationUpdateModel;
    resourceAllocationUpdateModel1?: shared.ResourceAllocationUpdateModel;
    resourceAllocationUpdateModel2?: shared.ResourceAllocationUpdateModel;
    resourceAllocationUpdateModel3?: shared.ResourceAllocationUpdateModel;
}
export declare class PutSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcesAllocationsIdPathParams;
    request?: PutSetupV1ResourcesAllocationsIdRequests;
}
export declare class PutSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
