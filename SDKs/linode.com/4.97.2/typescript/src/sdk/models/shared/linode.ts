import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinodeAlerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=io" })
  io?: number;

  @Metadata({ data: "json, name=network_in" })
  networkIn?: number;

  @Metadata({ data: "json, name=network_out" })
  networkOut?: number;

  @Metadata({ data: "json, name=transfer_quota" })
  transferQuota?: number;
}

export enum LinodeBackupsScheduleDayEnum {
    Scheduling = "Scheduling"
,    Sunday = "Sunday"
,    Monday = "Monday"
,    Tuesday = "Tuesday"
,    Wednesday = "Wednesday"
,    Thursday = "Thursday"
,    Friday = "Friday"
,    Saturday = "Saturday"
}

export enum LinodeBackupsScheduleWindowEnum {
    Scheduling = "Scheduling"
,    W0 = "W0"
,    W2 = "W2"
,    W4 = "W4"
,    W6 = "W6"
,    W8 = "W8"
,    W10 = "W10"
,    W12 = "W12"
,    W14 = "W14"
,    W16 = "W16"
,    W18 = "W18"
,    W20 = "W20"
,    W22 = "W22"
}


export class LinodeBackupsSchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: LinodeBackupsScheduleDayEnum;

  @Metadata({ data: "json, name=window" })
  window?: LinodeBackupsScheduleWindowEnum;
}


// LinodeBackups
/** 
 * Information about this Linode's backups status. For information about available backups, see [/linode/instances/{linodeId}/backups](/docs/api/linode-instances/#backups-list).
 * 
**/
export class LinodeBackups extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=last_successful" })
  lastSuccessful?: Date;

  @Metadata({ data: "json, name=schedule" })
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
  @Metadata({ data: "json, name=disk" })
  disk?: number;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=transfer" })
  transfer?: number;

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;
}

export enum LinodeStatusEnum {
    Running = "running"
,    Offline = "offline"
,    Booting = "booting"
,    Rebooting = "rebooting"
,    ShuttingDown = "shutting_down"
,    Provisioning = "provisioning"
,    Deleting = "deleting"
,    Migrating = "migrating"
,    Rebuilding = "rebuilding"
,    Cloning = "cloning"
,    Restoring = "restoring"
,    Stopped = "stopped"
}


export class Linode extends SpeakeasyBase {
  @Metadata({ data: "json, name=alerts" })
  alerts?: LinodeAlerts;

  @Metadata({ data: "json, name=backups" })
  backups?: LinodeBackups;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=hypervisor" })
  hypervisor?: LinodeHypervisorEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: Map<string, any>;

  @Metadata({ data: "json, name=ipv4" })
  ipv4?: string[];

  @Metadata({ data: "json, name=ipv6" })
  ipv6?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=specs" })
  specs?: LinodeSpecs;

  @Metadata({ data: "json, name=status" })
  status?: LinodeStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=watchdog_enabled" })
  watchdogEnabled?: boolean;
}
