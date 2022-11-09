import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NestedDevice } from "./nesteddevice";
import { NestedIpAddress } from "./nestedipaddress";
import { NestedVirtualMachine } from "./nestedvirtualmachine";


export class ServiceProtocol extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=value" })
  value: number;
}


export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device" })
  device?: NestedDevice;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=ipaddresses", elemType: shared.NestedIpAddress })
  ipaddresses?: NestedIpAddress[];

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=protocol" })
  protocol: ServiceProtocol;

  @Metadata({ data: "json, name=virtual_machine" })
  virtualMachine?: NestedVirtualMachine;
}
