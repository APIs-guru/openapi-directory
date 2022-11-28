import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HealthStatusEnum {
    Unknown = "UNKNOWN",
    Up = "UP",
    Down = "DOWN"
}
export declare class Health extends SpeakeasyBase {
    description?: string;
    details?: Map<string, Health>;
    status?: HealthStatusEnum;
}
