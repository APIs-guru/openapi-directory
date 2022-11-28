import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OtoroshiHealthDatastoreEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unreachable = "unreachable"
}
export declare enum OtoroshiHealthOtoroshiEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Down = "down"
}
/**
 * The structure that represent current Otoroshi health
**/
export declare class OtoroshiHealth extends SpeakeasyBase {
    datastore: OtoroshiHealthDatastoreEnum;
    otoroshi: OtoroshiHealthOtoroshiEnum;
}
