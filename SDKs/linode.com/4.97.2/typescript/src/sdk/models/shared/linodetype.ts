import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinodeTypeAddonsBackupsPrice
/** 
 * Cost of enabling Backups for this Linode Type.
**/
export class LinodeTypeAddonsBackupsPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=hourly" })
  hourly?: number;

  @Metadata({ data: "json, name=monthly" })
  monthly?: number;
}


// LinodeTypeAddonsBackups
/** 
 * Information about the optional Backup service offered for Linodes.
 * 
**/
export class LinodeTypeAddonsBackups extends SpeakeasyBase {
  @Metadata({ data: "json, name=price" })
  price?: LinodeTypeAddonsBackupsPrice;
}


// LinodeTypeAddons
/** 
 * A list of optional add-on services for Linodes and their associated costs.
 * 
**/
export class LinodeTypeAddons extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups" })
  backups?: LinodeTypeAddonsBackups;
}

export enum LinodeTypeClassEnum {
    Nanode = "nanode"
,    Standard = "standard"
,    Dedicated = "dedicated"
,    Gpu = "gpu"
,    Highmem = "highmem"
}


// LinodeTypePrice
/** 
 * Cost in US dollars, broken down into hourly and monthly charges.
 * 
**/
export class LinodeTypePrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=hourly" })
  hourly?: number;

  @Metadata({ data: "json, name=monthly" })
  monthly?: number;
}


// LinodeType
/** 
 * Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
 * 
**/
export class LinodeType extends SpeakeasyBase {
  @Metadata({ data: "json, name=addons" })
  addons?: LinodeTypeAddons;

  @Metadata({ data: "json, name=class" })
  class?: LinodeTypeClassEnum;

  @Metadata({ data: "json, name=disk" })
  disk?: number;

  @Metadata({ data: "json, name=gpus" })
  gpus?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=network_out" })
  networkOut?: number;

  @Metadata({ data: "json, name=price" })
  price?: LinodeTypePrice;

  @Metadata({ data: "json, name=successor" })
  successor?: string;

  @Metadata({ data: "json, name=transfer" })
  transfer?: number;

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
