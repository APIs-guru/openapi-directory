import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProfileMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED",
    Person = "PERSON",
    Page = "PAGE"
}

export enum ProfileMetadataUserTypesEnum {
    UserTypeUnknown = "USER_TYPE_UNKNOWN",
    GoogleUser = "GOOGLE_USER",
    GplusUser = "GPLUS_USER",
    GoogleAppsUser = "GOOGLE_APPS_USER"
}


// ProfileMetadata
/** 
 * The metadata about a profile.
**/
export class ProfileMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: ProfileMetadataObjectTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=userTypes" })
  userTypes?: ProfileMetadataUserTypesEnum[];
}
