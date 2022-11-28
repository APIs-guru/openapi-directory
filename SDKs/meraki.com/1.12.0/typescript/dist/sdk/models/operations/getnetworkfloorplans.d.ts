import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkFloorPlansPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkFloorPlansRequest extends SpeakeasyBase {
    pathParams: GetNetworkFloorPlansPathParams;
}
export declare class GetNetworkFloorPlansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkFloorPlans200ApplicationJsonObject?: Map<string, any>;
}
