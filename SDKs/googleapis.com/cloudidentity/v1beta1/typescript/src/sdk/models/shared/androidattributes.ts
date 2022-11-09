import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AndroidAttributesOwnershipPrivilegeEnum {
    OwnershipPrivilegeUnspecified = "OWNERSHIP_PRIVILEGE_UNSPECIFIED"
,    DeviceAdministrator = "DEVICE_ADMINISTRATOR"
,    ProfileOwner = "PROFILE_OWNER"
,    DeviceOwner = "DEVICE_OWNER"
}


// AndroidAttributes
/** 
 * Resource representing the Android specific attributes of a Device.
**/
export class AndroidAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabledUnknownSources" })
  enabledUnknownSources?: boolean;

  @Metadata({ data: "json, name=ownerProfileAccount" })
  ownerProfileAccount?: boolean;

  @Metadata({ data: "json, name=ownershipPrivilege" })
  ownershipPrivilege?: AndroidAttributesOwnershipPrivilegeEnum;

  @Metadata({ data: "json, name=supportsWorkProfile" })
  supportsWorkProfile?: boolean;
}
