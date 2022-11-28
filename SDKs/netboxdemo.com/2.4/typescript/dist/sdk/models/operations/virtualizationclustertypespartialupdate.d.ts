import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterTypesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClusterTypesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationClusterTypesPartialUpdatePathParams;
    request: shared.ClusterTypeInput;
}
export declare class VirtualizationClusterTypesPartialUpdateResponse extends SpeakeasyBase {
    clusterType?: shared.ClusterType;
    contentType: string;
    statusCode: number;
}
