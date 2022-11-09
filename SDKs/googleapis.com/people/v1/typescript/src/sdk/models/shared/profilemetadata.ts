import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProfileMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED"
,    Person = "PERSON"
,    Page = "PAGE"
}

export enum ProfileMetadataUserTypesEnum {
    UserTypeUnknown = "USER_TYPE_UNKNOWN"
,    GoogleUser = "GOOGLE_USER"
,    GplusUser = "GPLUS_USER"
,    GoogleAppsUser = "GOOGLE_APPS_USER"
}


// ProfileMetadata
/** 
 * The metadata about a profile.
**/
export class ProfileMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectType" })
  objectType?: ProfileMetadataObjectTypeEnum;

  @Metadata({ data: "json, name=userTypes" })
  userTypes?: ProfileMetadataUserTypesEnum[];
}
