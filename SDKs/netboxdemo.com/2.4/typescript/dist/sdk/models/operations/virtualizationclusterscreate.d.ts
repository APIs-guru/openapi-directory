import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClustersCreateRequest extends SpeakeasyBase {
    request: shared.WritableClusterInput;
}
export declare class VirtualizationClustersCreateResponse extends SpeakeasyBase {
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
}
