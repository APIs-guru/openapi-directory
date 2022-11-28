import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationClustersReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class VirtualizationClustersReadRequest extends SpeakeasyBase {
    pathParams: VirtualizationClustersReadPathParams;
}
export declare class VirtualizationClustersReadResponse extends SpeakeasyBase {
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
}
