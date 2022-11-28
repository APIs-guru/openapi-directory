import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AndroidAttributesOwnershipPrivilegeEnum {
    OwnershipPrivilegeUnspecified = "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
    DeviceAdministrator = "DEVICE_ADMINISTRATOR",
    ProfileOwner = "PROFILE_OWNER",
    DeviceOwner = "DEVICE_OWNER"
}
/**
 * Resource representing the Android specific attributes of a Device.
**/
export declare class AndroidAttributes extends SpeakeasyBase {
    enabledUnknownSources?: boolean;
    ownerProfileAccount?: boolean;
    ownershipPrivilege?: AndroidAttributesOwnershipPrivilegeEnum;
    supportsWorkProfile?: boolean;
}
