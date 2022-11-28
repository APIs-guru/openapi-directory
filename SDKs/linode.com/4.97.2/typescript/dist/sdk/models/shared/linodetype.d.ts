import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cost of enabling Backups for this Linode Type.
**/
export declare class LinodeTypeAddonsBackupsPrice extends SpeakeasyBase {
    hourly?: number;
    monthly?: number;
}
/**
 * Information about the optional Backup service offered for Linodes.
 *
**/
export declare class LinodeTypeAddonsBackups extends SpeakeasyBase {
    price?: LinodeTypeAddonsBackupsPrice;
}
/**
 * A list of optional add-on services for Linodes and their associated costs.
 *
**/
export declare class LinodeTypeAddons extends SpeakeasyBase {
    backups?: LinodeTypeAddonsBackups;
}
export declare enum LinodeTypeClassEnum {
    Nanode = "nanode",
    Standard = "standard",
    Dedicated = "dedicated",
    Gpu = "gpu",
    Highmem = "highmem"
}
/**
 * Cost in US dollars, broken down into hourly and monthly charges.
 *
**/
export declare class LinodeTypePrice extends SpeakeasyBase {
    hourly?: number;
    monthly?: number;
}
/**
 * Returns collection of Linode types, including pricing and specifications for each type. These are used when [creating](/docs/api/linode-instances/#linode-create) or [resizing](/docs/api/linode-instances/#linode-resize) Linodes.
 *
**/
export declare class LinodeType extends SpeakeasyBase {
    addons?: LinodeTypeAddons;
    class?: LinodeTypeClassEnum;
    disk?: number;
    gpus?: number;
    id?: string;
    label?: string;
    memory?: number;
    networkOut?: number;
    price?: LinodeTypePrice;
    successor?: string;
    transfer?: number;
    vcpus?: number;
}
