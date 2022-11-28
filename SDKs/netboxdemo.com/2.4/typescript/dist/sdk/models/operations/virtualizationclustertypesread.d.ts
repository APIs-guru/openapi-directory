import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterTypesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClusterTypesReadRequest extends SpeakeasyBase {
    pathParams: VirtualizationClusterTypesReadPathParams;
}
export declare class VirtualizationClusterTypesReadResponse extends SpeakeasyBase {
    clusterType?: shared.ClusterType;
    contentType: string;
    statusCode: number;
}
