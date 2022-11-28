import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClustersUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClustersUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationClustersUpdatePathParams;
    request: shared.WritableClusterInput;
}
export declare class VirtualizationClustersUpdateResponse extends SpeakeasyBase {
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
}
