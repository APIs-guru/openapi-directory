import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTopologyMapsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasTopologyMapsReadRequest extends SpeakeasyBase {
    pathParams: ExtrasTopologyMapsReadPathParams;
}
export declare class ExtrasTopologyMapsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topologyMap?: shared.TopologyMap;
}
