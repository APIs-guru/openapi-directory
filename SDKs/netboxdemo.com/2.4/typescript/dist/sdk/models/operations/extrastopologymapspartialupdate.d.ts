import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTopologyMapsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasTopologyMapsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: ExtrasTopologyMapsPartialUpdatePathParams;
    request: shared.WritableTopologyMapInput;
}
export declare class ExtrasTopologyMapsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topologyMap?: shared.TopologyMap;
}
