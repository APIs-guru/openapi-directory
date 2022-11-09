import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PackageDesiredStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED"
,    Installed = "INSTALLED"
,    Updated = "UPDATED"
,    Removed = "REMOVED"
}

export enum PackageManagerEnum {
    ManagerUnspecified = "MANAGER_UNSPECIFIED"
,    Any = "ANY"
,    Apt = "APT"
,    Yum = "YUM"
,    Zypper = "ZYPPER"
,    Goo = "GOO"
}


// Package
/** 
 * Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3`
**/
export class Package extends SpeakeasyBase {
  @Metadata({ data: "json, name=desiredState" })
  desiredState?: PackageDesiredStateEnum;

  @Metadata({ data: "json, name=manager" })
  manager?: PackageManagerEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
