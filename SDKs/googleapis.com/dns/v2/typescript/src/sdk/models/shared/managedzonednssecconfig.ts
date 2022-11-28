import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";


export enum ManagedZoneDnsSecConfigNonExistenceEnum {
    Nsec = "NSEC",
    Nsec3 = "NSEC3"
}

export enum ManagedZoneDnsSecConfigStateEnum {
    Off = "OFF",
    On = "ON",
    Transfer = "TRANSFER"
}


export class ManagedZoneDnsSecConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultKeySpecs", elemType: DnsKeySpec })
  defaultKeySpecs?: DnsKeySpec[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nonExistence" })
  nonExistence?: ManagedZoneDnsSecConfigNonExistenceEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ManagedZoneDnsSecConfigStateEnum;
}
