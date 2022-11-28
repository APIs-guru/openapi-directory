import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterGroupsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClusterGroupsReadRequest extends SpeakeasyBase {
    pathParams: VirtualizationClusterGroupsReadPathParams;
}
export declare class VirtualizationClusterGroupsReadResponse extends SpeakeasyBase {
    clusterGroup?: shared.ClusterGroup;
    contentType: string;
    statusCode: number;
}
