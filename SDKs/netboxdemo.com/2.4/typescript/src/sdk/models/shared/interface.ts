import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterfaceCircuitTermination } from "./interfacecircuittermination";
import { NestedDevice } from "./nesteddevice";
import { NestedInterface } from "./nestedinterface";
import { InterfaceVlan } from "./interfacevlan";



export class InterfaceFormFactor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class InterfaceMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}


export class Interface extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=circuit_termination" })
  circuitTermination?: InterfaceCircuitTermination;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device: NestedDevice;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=form_factor" })
  formFactor?: InterfaceFormFactor;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=interface_connection" })
  interfaceConnection?: string;

  @SpeakeasyMetadata({ data: "json, name=is_connected" })
  isConnected?: string;

  @SpeakeasyMetadata({ data: "json, name=lag" })
  lag?: NestedInterface;

  @SpeakeasyMetadata({ data: "json, name=mac_address" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=mgmt_only" })
  mgmtOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: InterfaceMode;

  @SpeakeasyMetadata({ data: "json, name=mtu" })
  mtu?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=tagged_vlans", elemType: InterfaceVlan })
  taggedVlans?: InterfaceVlan[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=untagged_vlan" })
  untaggedVlan?: InterfaceVlan;
}
