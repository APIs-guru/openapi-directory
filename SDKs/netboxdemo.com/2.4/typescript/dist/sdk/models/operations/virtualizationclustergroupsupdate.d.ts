import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterGroupsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClusterGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationClusterGroupsUpdatePathParams;
    request: shared.ClusterGroupInput;
}
export declare class VirtualizationClusterGroupsUpdateResponse extends SpeakeasyBase {
    clusterGroup?: shared.ClusterGroup;
    contentType: string;
    statusCode: number;
}
