import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableInterfaceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=circuit_termination" })
  circuitTermination: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=form_factor" })
  formFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=lag" })
  lag?: number;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=mgmt_only" })
  mgmtOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: number;

  @SpeakeasyMetadata({ data: "json, name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tagged_vlans" })
  taggedVlans?: number[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=untagged_vlan" })
  untaggedVlan?: number;
}
