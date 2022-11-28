import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTopologyMapsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasTopologyMapsUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasTopologyMapsUpdatePathParams;
    request: shared.WritableTopologyMapInput;
}
export declare class ExtrasTopologyMapsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topologyMap?: shared.TopologyMap;
}
