import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsKeySpec } from "./dnskeyspec";

export enum ManagedZoneDnsSecConfigNonExistenceEnum {
    Nsec = "NSEC"
,    Nsec3 = "NSEC3"
}

export enum ManagedZoneDnsSecConfigStateEnum {
    Off = "OFF"
,    On = "ON"
,    Transfer = "TRANSFER"
}


export class ManagedZoneDnsSecConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultKeySpecs", elemType: shared.DnsKeySpec })
  defaultKeySpecs?: DnsKeySpec[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nonExistence" })
  nonExistence?: ManagedZoneDnsSecConfigNonExistenceEnum;

  @Metadata({ data: "json, name=state" })
  state?: ManagedZoneDnsSecConfigStateEnum;
}
