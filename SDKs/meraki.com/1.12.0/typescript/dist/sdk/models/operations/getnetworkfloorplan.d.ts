import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkFloorPlanPathParams extends SpeakeasyBase {
    floorPlanId: string;
    networkId: string;
}
export declare class GetNetworkFloorPlanRequest extends SpeakeasyBase {
    pathParams: GetNetworkFloorPlanPathParams;
}
export declare class GetNetworkFloorPlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkFloorPlan200ApplicationJsonObject?: Map<string, any>;
}
