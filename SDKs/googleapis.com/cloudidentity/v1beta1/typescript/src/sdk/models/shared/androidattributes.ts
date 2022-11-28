import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AndroidAttributesOwnershipPrivilegeEnum {
    OwnershipPrivilegeUnspecified = "OWNERSHIP_PRIVILEGE_UNSPECIFIED",
    DeviceAdministrator = "DEVICE_ADMINISTRATOR",
    ProfileOwner = "PROFILE_OWNER",
    DeviceOwner = "DEVICE_OWNER"
}


// AndroidAttributes
/** 
 * Resource representing the Android specific attributes of a Device.
**/
export class AndroidAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabledUnknownSources" })
  enabledUnknownSources?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ownerProfileAccount" })
  ownerProfileAccount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ownershipPrivilege" })
  ownershipPrivilege?: AndroidAttributesOwnershipPrivilegeEnum;

  @SpeakeasyMetadata({ data: "json, name=supportsWorkProfile" })
  supportsWorkProfile?: boolean;
}
