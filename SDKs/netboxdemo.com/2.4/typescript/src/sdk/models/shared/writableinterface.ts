import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableInterface extends SpeakeasyBase {
  @Metadata({ data: "json, name=circuit_termination" })
  circuitTermination: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device: number;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=form_factor" })
  formFactor?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface_connection" })
  interfaceConnection?: string;

  @Metadata({ data: "json, name=is_connected" })
  isConnected?: string;

  @Metadata({ data: "json, name=lag" })
  lag?: number;

  @Metadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @Metadata({ data: "json, name=mgmt_only" })
  mgmtOnly?: boolean;

  @Metadata({ data: "json, name=mode" })
  mode?: number;

  @Metadata({ data: "json, name=mtu" })
  mtu?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=tagged_vlans" })
  taggedVlans?: number[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=untagged_vlan" })
  untaggedVlan?: number;
}
