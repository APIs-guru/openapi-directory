import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinodeAlerts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=io" })
  io?: number;

  @SpeakeasyMetadata({ data: "json, name=network_in" })
  networkIn?: number;

  @SpeakeasyMetadata({ data: "json, name=network_out" })
  networkOut?: number;

  @SpeakeasyMetadata({ data: "json, name=transfer_quota" })
  transferQuota?: number;
}

export enum LinodeBackupsScheduleDayEnum {
    Scheduling = "Scheduling",
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

export enum LinodeBackupsScheduleWindowEnum {
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


export class LinodeBackupsSchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=day" })
  day?: LinodeBackupsScheduleDayEnum;

  @SpeakeasyMetadata({ data: "json, name=window" })
  window?: LinodeBackupsScheduleWindowEnum;
}


// LinodeBackups
/** 
 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
 * 
**/
export class LinodeBackups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_successful" })
  lastSuccessful?: Date;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: LinodeBackupsSchedule;
}

export enum LinodeHypervisorEnum {
    Kvm = "kvm"
}


// LinodeSpecs
/** 
 * Information about the resources available to this Linode.
**/
export class LinodeSpecs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: number;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=transfer" })
  transfer?: number;

  @SpeakeasyMetadata({ data: "json, name=vcpus" })
  vcpus?: number;
}

export enum LinodeStatusEnum {
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


// LinodeBackupsInput
/** 
 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
 * 
**/
export class LinodeBackupsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: LinodeBackupsSchedule;
}


export class Linode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts?: LinodeAlerts;

  @SpeakeasyMetadata({ data: "json, name=backups" })
  backups?: LinodeBackups;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=hypervisor" })
  hypervisor?: LinodeHypervisorEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4?: string[];

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=specs" })
  specs?: LinodeSpecs;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LinodeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=watchdog_enabled" })
  watchdogEnabled?: boolean;
}


export class LinodeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alerts" })
  alerts?: LinodeAlerts;

  @SpeakeasyMetadata({ data: "json, name=backups" })
  backups?: LinodeBackupsInput;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=watchdog_enabled" })
  watchdogEnabled?: boolean;
}
