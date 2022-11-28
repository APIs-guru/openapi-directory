import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OtoroshiHealthDatastoreEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Unreachable = "unreachable"
}

export enum OtoroshiHealthOtoroshiEnum {
    Healthy = "healthy",
    Unhealthy = "unhealthy",
    Down = "down"
}


// OtoroshiHealth
/** 
 * The structure that represent current Otoroshi health
**/
export class OtoroshiHealth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastore" })
  datastore: OtoroshiHealthDatastoreEnum;

  @SpeakeasyMetadata({ data: "json, name=otoroshi" })
  otoroshi: OtoroshiHealthOtoroshiEnum;
}
