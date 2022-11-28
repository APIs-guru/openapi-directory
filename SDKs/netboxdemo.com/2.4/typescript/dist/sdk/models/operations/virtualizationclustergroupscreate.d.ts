import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterGroupsCreateRequest extends SpeakeasyBase {
    request: shared.ClusterGroupInput;
}
export declare class VirtualizationClusterGroupsCreateResponse extends SpeakeasyBase {
    clusterGroup?: shared.ClusterGroup;
    contentType: string;
    statusCode: number;
}
