import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum {
    OwnershipPrivilegeUnspecified = "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
,    DeviceAdministrator = "DEVICE_ADMINISTRATOR"
,    ProfileOwner = "PROFILE_OWNER"
,    DeviceOwner = "DEVICE_OWNER"
}


// GoogleAppsCloudidentityDevicesV1AndroidAttributes
/** 
 * Resource representing the Android specific attributes of a Device.
**/
export class GoogleAppsCloudidentityDevicesV1AndroidAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledUnknownSources" })
  enabledUnknownSources?: boolean;

  @Metadata({ data: "json, name=ownerProfileAccount" })
  ownerProfileAccount?: boolean;

  @Metadata({ data: "json, name=ownershipPrivilege" })
  ownershipPrivilege?: GoogleAppsCloudidentityDevicesV1AndroidAttributesOwnershipPrivilegeEnum;

  @Metadata({ data: "json, name=supportsWorkProfile" })
  supportsWorkProfile?: boolean;
}
