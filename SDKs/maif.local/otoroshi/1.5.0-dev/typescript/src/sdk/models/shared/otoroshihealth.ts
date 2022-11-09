import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OtoroshiHealthDatastoreEnum {
    Healthy = "healthy"
,    Unhealthy = "unhealthy"
,    Unreachable = "unreachable"
}

export enum OtoroshiHealthOtoroshiEnum {
    Healthy = "healthy"
,    Unhealthy = "unhealthy"
,    Down = "down"
}


// OtoroshiHealth
/** 
 * The structure that represent current Otoroshi health
**/
export class OtoroshiHealth extends SpeakeasyBase {
  @Metadata({ data: "json, name=datastore" })
  datastore: OtoroshiHealthDatastoreEnum;

  @Metadata({ data: "json, name=otoroshi" })
  otoroshi: OtoroshiHealthOtoroshiEnum;
}
