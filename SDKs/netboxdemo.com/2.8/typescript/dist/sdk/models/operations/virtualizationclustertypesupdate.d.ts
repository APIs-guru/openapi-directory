import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterTypesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClusterTypesUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationClusterTypesUpdatePathParams;
    request: shared.ClusterTypeInput;
}
export declare class VirtualizationClusterTypesUpdateResponse extends SpeakeasyBase {
    clusterType?: shared.ClusterType;
    contentType: string;
    statusCode: number;
}
