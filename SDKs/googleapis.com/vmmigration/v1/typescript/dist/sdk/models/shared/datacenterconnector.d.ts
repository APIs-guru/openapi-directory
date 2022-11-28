import { SpeakeasyBase } from "../../../internal/utils";
import { AvailableUpdates } from "./availableupdates";
import { Status } from "./status";
import { UpgradeStatus } from "./upgradestatus";
export declare enum DatacenterConnectorStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Offline = "OFFLINE",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
export declare class DatacenterConnector extends SpeakeasyBase {
    applianceInfrastructureVersion?: string;
    applianceSoftwareVersion?: string;
    availableVersions?: AvailableUpdates;
    bucket?: string;
    createTime?: string;
    error?: Status;
    name?: string;
    registrationId?: string;
    serviceAccount?: string;
    state?: DatacenterConnectorStateEnum;
    stateTime?: string;
    updateTime?: string;
    upgradeStatus?: UpgradeStatus;
    version?: string;
}
/**
 * DatacenterConnector message describes a connector between the Source and GCP, which is installed on a vmware datacenter (an OVA vm installed by the user) to connect the Datacenter to GCP and support vm migration data transfer.
**/
export declare class DatacenterConnectorInput extends SpeakeasyBase {
    availableVersions?: AvailableUpdates;
    error?: Status;
    registrationId?: string;
    serviceAccount?: string;
    upgradeStatus?: UpgradeStatus;
    version?: string;
}
