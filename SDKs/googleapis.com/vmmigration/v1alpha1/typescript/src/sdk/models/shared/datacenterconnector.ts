import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AvailableUpdates } from "./availableupdates";
import { Status } from "./status";
import { UpgradeStatus } from "./upgradestatus";

export enum DatacenterConnectorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Offline = "OFFLINE"
,    Failed = "FAILED"
,    Active = "ACTIVE"
}


// DatacenterConnector
/** 
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
export class DatacenterConnector extends SpeakeasyBase {
  @Metadata({ data: "json, name=applianceInfrastructureVersion" })
  applianceInfrastructureVersion?: string;

  @Metadata({ data: "json, name=applianceSoftwareVersion" })
  applianceSoftwareVersion?: string;

  @Metadata({ data: "json, name=availableVersions" })
  availableVersions?: AvailableUpdates;

  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=registrationId" })
  registrationId?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=state" })
  state?: DatacenterConnectorStateEnum;

  @Metadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upgradeStatus" })
  upgradeStatus?: UpgradeStatus;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
