import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTopologyMapsCreateRequest extends SpeakeasyBase {
    request: shared.WritableTopologyMapInput;
}
export declare class ExtrasTopologyMapsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topologyMap?: shared.TopologyMap;
}
