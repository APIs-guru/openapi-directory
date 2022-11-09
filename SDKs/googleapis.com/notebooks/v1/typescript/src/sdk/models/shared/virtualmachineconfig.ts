import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";
import { ContainerImage } from "./containerimage";
import { LocalDisk } from "./localdisk";
import { EncryptionConfig } from "./encryptionconfig";
import { RuntimeShieldedInstanceConfig } from "./runtimeshieldedinstanceconfig";

export enum VirtualMachineConfigNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE"
,    VirtioNet = "VIRTIO_NET"
,    Gvnic = "GVNIC"
}


// VirtualMachineConfig
/** 
 * The config settings for virtual machine.
**/
export class VirtualMachineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: RuntimeAcceleratorConfig;

  @Metadata({ data: "json, name=bootImage" })
  bootImage?: Map<string, any>;

  @Metadata({ data: "json, name=containerImages", elemType: shared.ContainerImage })
  containerImages?: ContainerImage[];

  @Metadata({ data: "json, name=dataDisk" })
  dataDisk?: LocalDisk;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: EncryptionConfig;

  @Metadata({ data: "json, name=guestAttributes" })
  guestAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=internalIpOnly" })
  internalIpOnly?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=nicType" })
  nicType?: VirtualMachineConfigNicTypeEnum;

  @Metadata({ data: "json, name=reservedIpRange" })
  reservedIpRange?: string;

  @Metadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
