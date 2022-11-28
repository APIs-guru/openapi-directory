import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterGroupsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClusterGroupsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationClusterGroupsPartialUpdatePathParams;
    request: shared.ClusterGroupInput;
}
export declare class VirtualizationClusterGroupsPartialUpdateResponse extends SpeakeasyBase {
    clusterGroup?: shared.ClusterGroup;
    contentType: string;
    statusCode: number;
}
