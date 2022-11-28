import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1ServicesAllocationsIdRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1ServicesAllocationsIdPathParams;
}
export declare class GetConsumerV1ServicesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationViewModel?: shared.ServiceAllocationViewModel;
    statusCode: number;
}
