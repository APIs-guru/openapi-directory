import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";


export enum ManagedZoneDnsSecConfigNonExistenceEnum {
    Nsec = "nsec",
    Nsec3 = "nsec3"
}

export enum ManagedZoneDnsSecConfigStateEnum {
    Off = "off",
    On = "on",
    Transfer = "transfer"
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
