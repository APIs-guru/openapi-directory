import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VehicleTypeNetworkDataProviderEnum {
    Openstreetmap = "openstreetmap",
    Tomtom = "tomtom"
}
export declare class VehicleType extends SpeakeasyBase {
    capacity?: number[];
    considerTraffic?: boolean;
    costPerActivation?: number;
    costPerMeter?: number;
    costPerSecond?: number;
    networkDataProvider?: VehicleTypeNetworkDataProviderEnum;
    profile?: Map<string, any>;
    serviceTimeFactor?: number;
    speedFactor?: number;
    typeId: string;
}
