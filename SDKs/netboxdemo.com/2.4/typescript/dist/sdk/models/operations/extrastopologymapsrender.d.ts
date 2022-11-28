import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExtrasTopologyMapsRenderPathParams extends SpeakeasyBase {
    id: number;
}
export declare class ExtrasTopologyMapsRenderRequest extends SpeakeasyBase {
    pathParams: ExtrasTopologyMapsRenderPathParams;
}
export declare class ExtrasTopologyMapsRenderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topologyMap?: shared.TopologyMap;
}
