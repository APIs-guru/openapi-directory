import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinodeTypeAddonsBackupsPrice
/** 
 * Cost of enabling Backups for this Linode Type.
**/
export class LinodeTypeAddonsBackupsPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hourly" })
  hourly?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: number;
}


// LinodeTypeAddonsBackups
/** 
 * Information about the optional Backup service offered for Linodes.
 * 
**/
export class LinodeTypeAddonsBackups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: LinodeTypeAddonsBackupsPrice;
}


// LinodeTypeAddons
/** 
 * A list of optional add-on services for Linodes and their associated costs.
 * 
**/
export class LinodeTypeAddons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups" })
  backups?: LinodeTypeAddonsBackups;
}

export enum LinodeTypeClassEnum {
    Nanode = "nanode",
    Standard = "standard",
    Dedicated = "dedicated",
    Gpu = "gpu",
    Highmem = "highmem"
}


// LinodeTypePrice
/** 
 * Cost in US dollars, broken down into hourly and monthly charges.
 * 
**/
export class LinodeTypePrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hourly" })
  hourly?: number;

  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: number;
}


// LinodeType
/** 
 * Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
 * 
**/
export class LinodeType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addons" })
  addons?: LinodeTypeAddons;

  @SpeakeasyMetadata({ data: "json, name=class" })
  class?: LinodeTypeClassEnum;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: number;

  @SpeakeasyMetadata({ data: "json, name=gpus" })
  gpus?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=network_out" })
  networkOut?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: LinodeTypePrice;

  @SpeakeasyMetadata({ data: "json, name=successor" })
  successor?: string;

  @SpeakeasyMetadata({ data: "json, name=transfer" })
  transfer?: number;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;
}
