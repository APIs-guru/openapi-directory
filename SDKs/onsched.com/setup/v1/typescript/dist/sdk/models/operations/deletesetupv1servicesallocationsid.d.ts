import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ServicesAllocationsIdPathParams;
}
export declare class DeleteSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
}
