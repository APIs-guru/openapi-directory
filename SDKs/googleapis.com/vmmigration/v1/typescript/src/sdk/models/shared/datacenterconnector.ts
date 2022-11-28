import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AvailableUpdates } from "./availableupdates";
import { Status } from "./status";
import { UpgradeStatus } from "./upgradestatus";


export enum DatacenterConnectorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Offline = "OFFLINE",
    Failed = "FAILED",
    Active = "ACTIVE"
}


// DatacenterConnector
/** 
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
export class DatacenterConnector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applianceInfrastructureVersion" })
  applianceInfrastructureVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=applianceSoftwareVersion" })
  applianceSoftwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=availableVersions" })
  availableVersions?: AvailableUpdates;

  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=registrationId" })
  registrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DatacenterConnectorStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateTime" })
  stateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeStatus" })
  upgradeStatus?: UpgradeStatus;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// DatacenterConnectorInput
/** 
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
export class DatacenterConnectorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableVersions" })
  availableVersions?: AvailableUpdates;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=registrationId" })
  registrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeStatus" })
  upgradeStatus?: UpgradeStatus;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
