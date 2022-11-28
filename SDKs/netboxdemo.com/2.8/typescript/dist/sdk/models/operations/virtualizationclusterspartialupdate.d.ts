import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClustersPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClustersPartialUpdateRequest extends SpeakeasyBase {
    pathParams: VirtualizationClustersPartialUpdatePathParams;
    request: shared.WritableClusterInput;
}
export declare class VirtualizationClustersPartialUpdateResponse extends SpeakeasyBase {
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
}
