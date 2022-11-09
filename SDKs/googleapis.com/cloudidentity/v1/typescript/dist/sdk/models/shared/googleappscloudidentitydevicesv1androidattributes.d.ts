import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum {
    OwnershipPrivilegeUnspecified = "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
    DeviceAdministrator = "DEVICE_ADMINISTRATOR",
    ProfileOwner = "PROFILE_OWNER",
    DeviceOwner = "DEVICE_OWNER"
}
/**
 * Resource representing the Android specific attributes of a Device.
**/
export declare class GoogleAppsCloudidentityDevicesV1AndroidAttributes extends SpeakeasyBase {
    enabledUnknownSources?: boolean;
    ownerProfileAccount?: boolean;
    ownershipPrivilege?: GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum;
    supportsWorkProfile?: boolean;
}
