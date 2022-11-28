import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClusterTypesCreateRequest extends SpeakeasyBase {
    request: shared.ClusterTypeInput;
}
export declare class VirtualizationClusterTypesCreateResponse extends SpeakeasyBase {
    clusterType?: shared.ClusterType;
    contentType: string;
    statusCode: number;
}
