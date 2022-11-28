import { SpeakeasyBase } from "../../../internal/utils";
export declare class LinodeAlerts extends SpeakeasyBase {
    cpu?: number;
    io?: number;
    networkIn?: number;
    networkOut?: number;
    transferQuota?: number;
}
export declare enum LinodeBackupsScheduleDayEnum {
    Scheduling = "Scheduling",
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}
export declare enum LinodeBackupsScheduleWindowEnum {
    Scheduling = "Scheduling",
    W0 = "W0",
    W2 = "W2",
    W4 = "W4",
    W6 = "W6",
    W8 = "W8",
    W10 = "W10",
    W12 = "W12",
    W14 = "W14",
    W16 = "W16",
    W18 = "W18",
    W20 = "W20",
    W22 = "W22"
}
export declare class LinodeBackupsSchedule extends SpeakeasyBase {
    day?: LinodeBackupsScheduleDayEnum;
    window?: LinodeBackupsScheduleWindowEnum;
}
/**
 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
 *
**/
export declare class LinodeBackups extends SpeakeasyBase {
    enabled?: boolean;
    lastSuccessful?: Date;
    schedule?: LinodeBackupsSchedule;
}
export declare enum LinodeHypervisorEnum {
    Kvm = "kvm"
}
/**
 * Information about the resources available to this Linode.
**/
export declare class LinodeSpecs extends SpeakeasyBase {
    disk?: number;
    memory?: number;
    transfer?: number;
    vcpus?: number;
}
export declare enum LinodeStatusEnum {
    Running = "running",
    Offline = "offline",
    Booting = "booting",
    Rebooting = "rebooting",
    ShuttingDown = "shutting_down",
    Provisioning = "provisioning",
    Deleting = "deleting",
    Migrating = "migrating",
    Rebuilding = "rebuilding",
    Cloning = "cloning",
    Restoring = "restoring",
    Stopped = "stopped"
}
/**
 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
 *
**/
export declare class LinodeBackupsInput extends SpeakeasyBase {
    schedule?: LinodeBackupsSchedule;
}
export declare class Linode extends SpeakeasyBase {
    alerts?: LinodeAlerts;
    backups?: LinodeBackups;
    created?: Date;
    group?: string;
    hypervisor?: LinodeHypervisorEnum;
    id?: number;
    image?: Map<string, any>;
    ipv4?: string[];
    ipv6?: string;
    label?: string;
    region?: string;
    specs?: LinodeSpecs;
    status?: LinodeStatusEnum;
    tags?: string[];
    type?: string;
    updated?: Date;
    watchdogEnabled?: boolean;
}
export declare class LinodeInput extends SpeakeasyBase {
    alerts?: LinodeAlerts;
    backups?: LinodeBackupsInput;
    group?: string;
    label?: string;
    tags?: string[];
    watchdogEnabled?: boolean;
}
