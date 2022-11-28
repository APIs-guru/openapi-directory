import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesAllocationsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesAllocationsIdPathParams;
}
export declare class GetSetupV1ServicesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
}
