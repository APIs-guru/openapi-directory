import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsKeySpec } from "./dnskeyspec";

export enum ManagedZoneDnsSecConfigNonExistenceEnum {
    Nsec = "nsec"
,    Nsec3 = "nsec3"
}

export enum ManagedZoneDnsSecConfigStateEnum {
    Off = "off"
,    On = "on"
,    Transfer = "transfer"
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
