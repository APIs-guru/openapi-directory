import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum {
    OwnershipPrivilegeUnspecified = "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
    DeviceAdministrator = "DEVICE_ADMINISTRATOR",
    ProfileOwner = "PROFILE_OWNER",
    DeviceOwner = "DEVICE_OWNER"
}


// GoogleAppsCloudidentityDevicesV1AndroidAttributes
/** 
 * Resource representing the Android specific attributes of a Device.
**/
export class GoogleAppsCloudidentityDevicesV1AndroidAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledUnknownSources" })
  enabledUnknownSources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ownerProfileAccount" })
  ownerProfileAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ownershipPrivilege" })
  ownershipPrivilege?: GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum;

  @SpeakeasyMetadata({ data: "json, name=supportsWorkProfile" })
  supportsWorkProfile?: boolean;
}
