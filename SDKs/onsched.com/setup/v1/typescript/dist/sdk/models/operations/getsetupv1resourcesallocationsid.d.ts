import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ResourcesAllocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesAllocationsIdPathParams;
}
export declare class GetSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceAllocationViewModel?: shared.ResourceAllocationViewModel;
    statusCode: number;
}
